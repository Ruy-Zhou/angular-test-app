import { Component, effect, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkWithHref } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider'

@Component({
  selector: '.app-root',
  imports: [RouterOutlet, RouterLink, MatDividerModule, RouterLinkWithHref],
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
