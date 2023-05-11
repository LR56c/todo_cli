import {TestingModule} from '@nestjs/testing'
import {AppModule, TodoFinder, TodoService, TodosFinder} from "../../../src"
import {TodoMother, TodoRepositoryMock} from "../stubs"
import {CommandTestFactory} from "nest-commander-testing"

describe('Find all command', () => {
  let commandInstance: TestingModule

  let todoRepositoryMock: TodoRepositoryMock
  let todoFinder: TodosFinder
  let todo1 = TodoMother.random()

  beforeEach(async () => {
    jest.clearAllMocks()
    todoRepositoryMock = new TodoRepositoryMock([todo1])

    commandInstance = await CommandTestFactory.createTestingCommand({
      imports: [AppModule]
    })
      .overrideProvider(TodoService)
      .useValue(todoRepositoryMock)
      .compile()

    todoFinder = await commandInstance
      .resolve(TodoFinder)
  })

  it('should exit success when show all todos', async () => {
    // Arrange
    const processExit = jest
      .spyOn(process, 'exit')
      .mockImplementation((code?: number) => undefined as never)

    const todoFinderMock = jest
      .spyOn(todoFinder, 'execute')

    // Act
    await CommandTestFactory.run(commandInstance, ['todo', 'find', todo1.todoId.value])

    // Assert
    expect(processExit).toHaveBeenCalledWith(0)
    expect(todoRepositoryMock.searchIdMock).toHaveBeenCalledTimes(1)
    expect(todoFinderMock).toHaveBeenCalledTimes(1)
    expect(processExit).toHaveBeenCalledTimes(1)
    processExit.mockRestore()
  })

  it('should fail status when input is invalid', async () => {
    // Arrange
    const processExit = jest
      .spyOn(process, 'exit')
      .mockImplementation((code?: number) => undefined as never)

    const todoFinderMock = jest
      .spyOn(todoFinder, 'execute')

    // Act
    await CommandTestFactory.run(commandInstance, ['todo', 'find', 'a'])

    // Assert
    expect(processExit).toHaveBeenCalledWith(5)
    expect(todoRepositoryMock.searchIdMock).toHaveBeenCalledTimes(0)
    expect(todoFinderMock).toHaveBeenCalledTimes(0)
    expect(processExit).toHaveBeenCalledTimes(1)
    processExit.mockRestore()
  })
})
