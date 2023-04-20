import {Err, Ok, Result} from 'oxide.ts';
import { Todo, TodoId, TodoRepository } from "../../domain";

export class LocalDataSource implements TodoRepository {
  constructor(private todos: Todo[]) {
  }

  async createTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
    try {
        this.todos.push(newTodo);
        return Promise.resolve(Ok(true));
    }
    catch (e) {
        return Promise.resolve(Err(e));
    }
  }

  async deleteTodo(id: TodoId): Promise<Result<boolean, Error>> {
    try {
        this.todos = this.todos.filter(todo => todo.todoId.value !== id.value);
        return Promise.resolve(Ok(true));
    }
    catch (e) {
        return Promise.resolve(Err(e));
    }
  }

  async getTodoById(id: TodoId): Promise<Result<Todo, Error>> {
    try {
        const todo = this.todos.find(todo => todo.todoId.value === id.value);
        return Promise.resolve(Ok(todo));
    }
    catch (e) {
        return Promise.resolve(Err(e));
    }
  }

  async getTodos(): Promise<Result<Todo[], Error>> {
    try {
        return Promise.resolve(Ok(this.todos));
    }
    catch (e) {
        return Promise.resolve(Err(e));
    }
  }

  async updateTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
    try {
        this.todos = this.todos.map(todo => todo.todoId.value === newTodo.todoId.value ? newTodo : todo);
        return Promise.resolve(Ok(true));
    }
    catch (e) {
        return Promise.resolve(Err(e));
    }
  }
}
