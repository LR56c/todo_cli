import { Result } from 'oxide.ts';
import { Todo, TodoId } from "../entities";

export interface TodoRepository {
  createTodo(newTodo: Todo): Promise<Result<boolean, Error>>;

  deleteTodo(id: TodoId): Promise<Result<boolean, Error>>;

  getTodoById(id: TodoId): Promise<Result<Todo, Error>>;

  getTodos(): Promise<Result<Todo[], Error>>;

  updateTodo(newTodo: Todo): Promise<Result<boolean, Error>>;
}

