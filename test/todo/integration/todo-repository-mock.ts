import {Todo, TodoId, TodoRepository} from "../../../src";
import {Ok, Result} from "oxide.ts";

export class TodoRepositoryMock implements TodoRepository {
  public readonly searchIdMock: jest.Mock;
  public readonly saveMock: jest.Mock;
  public readonly deleteMock: jest.Mock;
  public readonly updateMock: jest.Mock;
  public readonly searchAllMock: jest.Mock;
  private todos: Array<Todo> = [];

  constructor(private context: Todo[]) {
    this.searchIdMock = jest.fn();
    this.saveMock = jest.fn();
    this.deleteMock = jest.fn();
    this.updateMock = jest.fn();
    this.searchAllMock = jest.fn();
  }

  createTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
    this.saveMock(newTodo);
    return Promise.resolve(Ok(true));
  }

  deleteTodo(id: TodoId): Promise<Result<boolean, Error>> {
    this.deleteMock(id);
    return Promise.resolve(Ok(true));
  }

  getTodoById(id: TodoId): Promise<Result<Todo, Error>> {
    this.searchIdMock(id);
    return Promise.resolve(Ok(null))
  }

  getTodos(): Promise<Result<Todo[], Error>> {
    this.searchAllMock();
    return Promise.resolve(Ok(this.todos));
  }

  updateTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
    this.updateMock(newTodo);
    return Promise.resolve(Ok(true));
  }

  assertSaveHaveBeenCalledWith(expected: Todo): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }
}
