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

  save(newTodo: Todo): Promise<Result<boolean, Error>> {
    this.saveMock(newTodo);
    return Promise.resolve(Ok(true));
  }

  createError(){
    this.saveMock.mockImplementation(() => {
      throw new Error('Error');
    });
  }

  delete(id: TodoId): Promise<Result<boolean, Error>> {
    this.deleteMock(id);
    return Promise.resolve(Ok(true));
  }

  searchByCriteria(id: TodoId): Promise<Result<Todo, Error>> {
    this.searchIdMock(id);
    return Promise.resolve(Ok(null))
  }

  searchAll(): Promise<Result<Todo[], Error>> {
    this.searchAllMock();
    return Promise.resolve(Ok(this.todos));
  }

  update(newTodo: Todo): Promise<Result<boolean, Error>> {
    this.updateMock(newTodo);
    return Promise.resolve(Ok(true));
  }

  assertSaveHaveBeenCalledWith(expected: Todo): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }
}
