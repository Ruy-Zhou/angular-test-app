import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.less',
})
export class User {
  protected username = signal('-');
  protected nickname = signal('-');
  protected email = signal('-');
  protected isEdit = signal(false);
  protected fullname = computed(() => `${this.username()} - ${this.nickname()}`);

  save() {
    this.username.set('new username');
  }
}
