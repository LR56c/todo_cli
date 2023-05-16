import {Result} from 'oxide.ts';
import {Injectable} from '@nestjs/common';
import {Criteria, Todo, TodoId, TodoRepository,} from "../../../lib";

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

  async searchBy(criteria: Criteria): Promise<Result<Todo, Error>> {
    return this.context.searchBy(criteria);
  }

  async searchAllBy(criteria: Criteria): Promise<Result<Todo[], Error>> {
    return this.context.searchAllBy(criteria);
  }

  async update(newTodo: Todo): Promise<Result<boolean, Error>> {
    return this.context.update(newTodo);
  }
}
