import { Result } from 'oxide.ts';
import { Todo, TodoId } from "../entities";
import {Criteria} from "../../../shared";

export interface TodoRepository {
  save(newTodo: Todo): Promise<Result<boolean, Error>>;

  delete(id: TodoId): Promise<Result<boolean, Error>>;

  searchBy(criteria: Criteria): Promise<Result<Todo, Error>>;

  searchAllBy(criteria : Criteria): Promise<Result<Todo[], Error>>;

  update(newTodo: Todo): Promise<Result<boolean, Error>>;
}

