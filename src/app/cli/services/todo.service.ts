import {Result} from 'oxide.ts';
import {Injectable} from '@nestjs/common';
import {Todo, TodoId, TodoRepository,} from "../../../lib";

@Injectable()
export class TodoService implements TodoRepository {
  constructor(private context: TodoRepository) {
  }

  async createTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
    return this.context.createTodo(newTodo);
  }

  async deleteTodo(id: TodoId): Promise<Result<boolean, Error>> {
    return this.context.deleteTodo(id);
  }

  async getTodoById(id: TodoId): Promise<Result<Todo, Error>> {
    return this.context.getTodoById(id);
  }

  async getTodos(): Promise<Result<Todo[], Error>> {
    return this.context.getTodos();
  }

  async updateTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
    return this.context.updateTodo(newTodo);
  }
}
