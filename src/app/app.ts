import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: '.app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected nowTime = signal(new Date().toLocaleString());
  protected timer: any;

  constructor() {
    effect((onCleanup) => {
      const timer = setInterval(() => {
        this.nowTime.set(new Date().toLocaleString());
      }, 1000);

      onCleanup(() => {
        clearInterval(timer);
      })
    })
  }

}
