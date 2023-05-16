import {TodoMother, TodoRepositoryMock} from "../stubs";
import {Criteria, TodoFinder} from "../../../src";

describe('SearchByIdTodo', () => {

    // Arrange
    let todoRepositoryMock: TodoRepositoryMock
    const todo1 = TodoMother.random()

    beforeEach(() => {
        jest.clearAllMocks()
        todoRepositoryMock = new TodoRepositoryMock([todo1])
    })

    it('should filter by id', async () => {
        // Act
        // const result = await new TodoFinder(todoRepositoryMock).execute(todo1.todoId)
        const result = await new TodoFinder(todoRepositoryMock).execute(new Criteria())

        // Assert
        expect(result.isOk()).toBe(true)
        todoRepositoryMock.assertSearchIdHaveBeenCalledWith(todo1.todoId)
    })
})
