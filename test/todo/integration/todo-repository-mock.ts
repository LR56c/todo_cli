import {Todo, TodoId, TodoRepository} from "../../../src"
import {Ok, Result} from "oxide.ts"

export class TodoRepositoryMock implements TodoRepository {
    public readonly searchIdMock: jest.Mock
    public readonly saveMock: jest.Mock
    public readonly deleteMock: jest.Mock
    public readonly updateMock: jest.Mock
    public readonly searchAllMock: jest.Mock

    constructor(private context: Todo[]) {
        this.searchIdMock = jest.fn()
        this.saveMock = jest.fn()
        this.deleteMock = jest.fn()
        this.updateMock = jest.fn()
        this.searchAllMock = jest.fn()
    }

    save(newTodo: Todo): Promise<Result<boolean, Error>> {
        this.saveMock(newTodo)
        return Promise.resolve(Ok(true))
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

    deleteError() {
        this.deleteMock.mockImplementation(() => {
            throw new Error('Error')
        })
    }

    delete(id: TodoId): Promise<Result<boolean, Error>> {

        this.context = this.context.filter((todo) => todo.todoId.value !== id.value)
        this.deleteMock(id)
        return Promise.resolve(Ok(true))
    }

    searchById(id: TodoId): Promise<Result<Todo, Error>> {
        this.searchIdMock(id)
        return Promise.resolve(Ok(null))
    }

    searchAll(): Promise<Result<Todo[], Error>> {
        this.searchAllMock()
        return Promise.resolve(Ok(this.context))
    }

    update(newTodo: Todo): Promise<Result<boolean, Error>> {
        this.updateMock(newTodo)
        return Promise.resolve(Ok(true))
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

    assertDeleteHaveBeenCalledWith(todoId: TodoId) {
        expect(this.context).toHaveLength(0)
        expect(this.deleteMock).toBeCalledTimes(1)
        expect(this.deleteMock).toHaveBeenCalledWith(todoId)
    }
}
