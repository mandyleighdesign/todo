import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  title: string = 'TODO List';

  constructor() { }
  
  todos: Todo[];
  todosCopy: Todo[];

  ngOnInit() {  

    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
    ];

    this.todosCopy = this.todos;
  }

  addItem(newTodo) {
    this.todos.push({
      id: this.todos.length + 1,
      title: newTodo,
      completed: false
    });
  }

  filterTodos(keyword) {
    this.todos = this.todosCopy.filter(todo => todo.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
  }

  onDeleteClicked(todoIndex) {
    this.todos = this.todos.filter(todo => todo.id !== todoIndex);
  }

}
