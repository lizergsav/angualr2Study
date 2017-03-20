import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  todos: Array<string>;
  constructor() {
    this.todos = ['Todo1', 'Todo2'];
  }
  addTodo(todo: string) {
    this.todos.push(todo);
  }
}
