import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Advice } from '../services/advice';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.less',
})
export class Login implements OnInit {
  ngOnInit(): void {
    console.log('login init');
  }
  private router: Router = inject(Router);
  private adviceService = inject(Advice);
  protected username = signal('admin');
  protected password = signal('123456');
  protected isLoading = signal(false);

  isUsernameValid = computed(() => {
    const length = this.username().length;
    return length > 3 ? 'is-valid' : length > 0 ? 'is-invalid' : '';
  });

  isPasswordValid = computed(() => {
    const length = this.password().length;
    return length > 3 ? 'is-valid' : length > 0 ? 'is-invalid' : '';
  });

  async login() {
    if (this.username() === '' || this.password() === '') {
      return alert('please input username and password');
    }

    if (this.username() !== 'admin' || this.password() !== '123456') {
      return alert('username or password is incorrect');
    }

    this.isLoading.set(true);
    this.adviceService.getAdvice().subscribe({
      next: (data) => {
        if (!data) {
          return alert('login failed');
        }

        alert('login success');
        this.router.navigate(['/home'], { queryParams: { username: this.username(), advice: data.slip.advice } });

      },
      error: (err) => {
        console.error(err);
        return alert('login failed');
      },
      complete: () => {
        this.isLoading.set(false)
      }
    });
  }
}
