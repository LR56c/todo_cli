import {Todo, TodoId, TodoInMemory, TodoRepository} from "../../../src"
import {Err, Ok, Result} from "oxide.ts"

export class TodoRepositoryMock implements TodoRepository {
  public readonly searchIdMock: jest.Mock
  public readonly saveMock: jest.Mock
  public readonly deleteMock: jest.Mock
  public readonly updateMock: jest.Mock
  public readonly searchAllMock: jest.Mock

  constructor(private context: TodoRepository) {
    this.searchIdMock = jest.fn()
    this.saveMock = jest.fn()
    this.deleteMock = jest.fn()
    this.updateMock = jest.fn()
    this.searchAllMock = jest.fn()
  }

  async save(newTodo: Todo): Promise<Result<boolean, Error>> {
    const result = await this.context.save(newTodo)
    this.saveMock(newTodo)
    return result
  }

  async delete(id: TodoId): Promise<Result<boolean, Error>> {
    const result = await this.context.delete(id)
    this.deleteMock(id)
    return result
  }

  async searchById(id: TodoId): Promise<Result<Todo, Error>> {
    const result = await this.context.searchById(id)
    this.searchIdMock(id)
    return result
  }

  async searchAll(): Promise<Result<Todo[], Error>> {
    const result = await this.context.searchAll()
    this.searchAllMock()
    return result
  }

  async update(newTodo: Todo): Promise<Result<boolean, Error>> {
    const result = await this.context.update(newTodo)
    this.updateMock(newTodo)
    return result
  }

  createError() {
    this.saveMock.mockImplementation(() => {
      throw new Error('Error')
    })
  }

  searchAllError() {
    this.searchAllMock.mockImplementation(() => {
      throw new Error('Error')
    })
  }

  searchIdError() {
    this.searchIdMock.mockImplementation(() => {
      throw new Error('Error')
    })
  }

  updateError() {
    this.updateMock.mockImplementation(() => {
      throw new Error('Error')
    })
  }

  deleteError() {
    this.deleteMock.mockImplementation(() => {
      throw new Error('Error')
    })
  }

  assertSaveHaveBeenCalledWith(expected: Todo): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected)
  }

  assertSearchIdHaveBeenCalledWith(expected: TodoId): void {
    expect(this.searchIdMock).toHaveBeenCalledWith(expected)
  }

  assertSearchAllHaveBeenCalled() {
    expect(this.searchAllMock).toHaveBeenCalled()
  }

  async assertDeleteHaveBeenCalledWith(todoId: TodoId) {
    const length = await this.context.searchAll()
    expect(length.unwrap()).toHaveLength(0)
    expect(this.deleteMock).toBeCalledTimes(1)
    expect(this.deleteMock).toHaveBeenCalledWith(todoId)
  }

  assertUpdateHaveBeenCalledWith(todo: Todo) {
    expect(this.updateMock).toBeCalledTimes(1)
    expect(this.updateMock).toHaveBeenCalledWith(todo)
  }
}
