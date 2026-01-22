import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class Home {
protected readonly title = signal('angular-test-app');
  protected message = signal('hello ng');
  protected effectRef: any;

  constructor() {
    console.log(this.message());

    this.effectRef = effect(() => {
      console.log(this.message());
    })
  }

  setMessage(msg: string) {
    this.message.set(msg);
  }

  reverseMessage() {
    this.setMessage(this.message().split('').reverse().join(''));
  }

  ngOnDestroy() {
    this.effectRef.destroy();
  }
}
