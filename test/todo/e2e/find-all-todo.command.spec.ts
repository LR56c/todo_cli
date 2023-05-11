import {TestingModule} from '@nestjs/testing'
import {AppModule, TodoService, TodosFinder} from "../../../src"
import {TodoMother, TodoRepositoryMock} from "../stubs"
import {CommandTestFactory} from "nest-commander-testing"

describe('Find all command', () => {
  let commandInstance: TestingModule

  let todoRepositoryMock: TodoRepositoryMock
  let todosFinder: TodosFinder
  let todo1 = TodoMother.random()
  let todo2 = TodoMother.random()
  let todo3 = TodoMother.random()

  beforeEach(async () => {
    jest.clearAllMocks()
    todoRepositoryMock = new TodoRepositoryMock([todo1,todo2,todo3])

    commandInstance = await CommandTestFactory.createTestingCommand({
      imports: [AppModule]
    })
      .overrideProvider(TodoService)
      .useValue(todoRepositoryMock)
      .compile()

    todosFinder = await commandInstance
      .resolve(TodosFinder)
  })

  it('should exit success when show all todos', async () => {
    // Arrange
    const processExit = jest
      .spyOn(process, 'exit')
      .mockImplementation((code?: number) => undefined as never)

    const todosFinderMock = jest
      .spyOn(todosFinder, 'execute')

    // Act
    await CommandTestFactory.run(commandInstance, ['todo', 'list'])

    // Assert
    expect(processExit).toHaveBeenCalledWith(0)
    expect(todoRepositoryMock.searchAllMock).toHaveBeenCalledTimes(1)
    expect(todosFinderMock).toHaveBeenCalledTimes(1)
    expect(processExit).toHaveBeenCalledTimes(1)
    processExit.mockRestore()
  })
})
