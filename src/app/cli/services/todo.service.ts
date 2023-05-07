import {Result} from 'oxide.ts';
import {Injectable} from '@nestjs/common';
import {Todo, TodoId, TodoRepository,} from "../../../lib";

@Injectable()
export class TodoService implements TodoRepository {
  constructor(private context: TodoRepository) {
  }

  async save(newTodo: Todo): Promise<Result<boolean, Error>> {
    return this.context.save(newTodo);
  }

  async delete(id: TodoId): Promise<Result<boolean, Error>> {
    return this.context.delete(id);
  }

  async searchByCriteria(id: TodoId): Promise<Result<Todo, Error>> {
    return this.context.searchByCriteria(id);
  }

  async searchAll(): Promise<Result<Todo[], Error>> {
    return this.context.searchAll();
  }

  async update(newTodo: Todo): Promise<Result<boolean, Error>> {
    return this.context.update(newTodo);
  }
}
