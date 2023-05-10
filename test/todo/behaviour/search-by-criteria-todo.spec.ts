import {TodoMother} from "../stubs";
import {TodoRepositoryMock} from "../integration";
import {TodoFinder, TodoInMemory} from "../../../src";

describe('SeachByIdTodo', () => {

    // Arrange
    let todoRepositoryMock: TodoRepositoryMock
    const todo1 = TodoMother.random()

    beforeEach(() => {
        jest.clearAllMocks()
        todoRepositoryMock = new TodoRepositoryMock(new TodoInMemory([todo1]))
    })

    it('should filter by id', async () => {
        // Act
        const result = await new TodoFinder(todoRepositoryMock).execute(
            todo1.todoId,
        )

        // Assert
        expect(result.isOk()).toBe(true)
        todoRepositoryMock.assertSearchIdHaveBeenCalledWith(todo1.todoId)
    })
})
