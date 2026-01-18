import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet],
  templateUrl: './user.html',
  styleUrl: './user.less',
})
export class User {
  protected username = signal('');
  protected nickname = signal('');
  protected email = signal('');
  protected isEdit = signal(false);
  protected fullname = computed(() => `${this.username()} - ${this.nickname()}`);

  save() {
    this.username.set('new username');
  }
}
