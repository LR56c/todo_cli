import {TodoMother, TodoRepositoryMock} from "../stubs";
import {TodosFinder} from "../../../src";

// TODO: deberia tener criteria tanto all, si no hay criteria busca todo, si hay busca todo del criteria
describe('SeachAllTodos', () => {

    // Arrange
    let todoRepositoryMock: TodoRepositoryMock
    const todo1 = TodoMother.random()
    const todo2 = TodoMother.random()

    beforeEach(() => {
        jest.clearAllMocks()
        todoRepositoryMock = new TodoRepositoryMock([todo1,todo2])
    })

    it('should get all todos (2)', async () => {
        // Act
        const result = await new TodosFinder(todoRepositoryMock).execute()

        // Assert
        expect(result.isOk()).toBe(true)
        expect(result.unwrap()).toHaveLength(2)
        todoRepositoryMock.assertSearchAllHaveBeenCalled()
    })

    it('should fail when database throw error', async () => {
        todoRepositoryMock.searchAllError()
        // Act
        const result = await new TodosFinder(todoRepositoryMock).execute()

        // Assert
        expect(result.isErr()).toBe(true)
    })
})
