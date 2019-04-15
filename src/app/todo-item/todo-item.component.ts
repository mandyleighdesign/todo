import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';
import { Button } from 'protractor';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() deleteClicked: EventEmitter<number> = new EventEmitter<number>();

  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    }
    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  removeTodo(todoIndex) {
    this.deleteClicked.emit(todoIndex);
  }
}
