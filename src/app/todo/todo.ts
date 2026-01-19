import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.less',
})
export class Todo {
  protected tasks = signal<string[]>([]);
  protected task = signal('');

  addTask() {
    this.tasks.update((tasks: string[]) => {
      return [...tasks, this.task()]
    })
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => {
      const _tasks = tasks.slice()
      _tasks.splice(index, 1)
      return _tasks
    })
  }
}
