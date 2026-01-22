import { Component, EventEmitter, Input, model, Output, signal } from '@angular/core';

@Component({
  selector: 'app-todo-list,.other-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.less',
})
export class TodoList {
  @Input({ required: true }) tasks = signal<TodoEntity[]>([])
  @Output() onDeleteTask = new EventEmitter()
  @Output() onFinishTask = new EventEmitter()

  message = model<string>('')

  deleteTask(id: number) {
    this.onDeleteTask.emit(id)
    this.message.set(`Task Id: ${id} deleted.`)
  }

  finishTask(id: number) {
    this.onFinishTask.emit(id)
    this.message.set(`Task Id: ${id} finished.`)
  }
}
