import { Component, ElementRef, HostBinding, HostListener, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, TodoList],
  templateUrl: './todo.html',
  styleUrl: './todo.less',
  host: {
    '(mouseout)': 'trackMouse($event)'
  }
})
export class Todo {
  protected tasks = signal<TodoEntity[]>([]);
  protected task = signal<string>('');
  protected message = signal('')
  elementRef = inject(ElementRef)

  otherTasks = signal([
    {id: 1, task: 'hello 1', done: false, deleted: false },
    {id: 2, task: 'hello 1', done: false, deleted: false },
    {id: 3, task: 'hello 1', done: false, deleted: false },
  ])

  addTask() {
    const todo: TodoEntity = {
      id: this.tasks().length + 1,
      task: this.task(),
      done: false,
      deleted: false
    }

    this.tasks.update((tasks: TodoEntity[]) => {
      return [...tasks, todo]
    })
  }

  deleteTask(id: number, tasks: TodoEntity[]) {
    const task = tasks.find(task => task.id === id)

    if (task) {
      task.deleted = true
    }
  }

  finishTask(id: number, tasks: TodoEntity[]) {
    const task = tasks.find(task => task.id === id)

    if (task) {
      task.done = true
    }
  }

  @HostBinding('style')
  get bindStyle() {
    return `
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 50px;
    `
  }

  @HostListener('click', ['$event'])
  clickPage(e: MouseEvent) {
    console.log(this.elementRef.nativeElement.innerText)
  }

  trackMouse(e: MouseEvent) {
    console.log(e.pageX, e.pageY)
  }
}
