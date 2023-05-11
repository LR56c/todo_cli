import {TestingModule} from '@nestjs/testing'
import {AppModule, TodoDelete, TodoService, TodoUpdater} from "../../../src"
import {TodoMother, TodoRepositoryMock} from "../stubs"
import {CommandTestFactory} from "nest-commander-testing"

describe('Delete command', () => {
  let commandInstance: TestingModule

  let todoRepositoryMock: TodoRepositoryMock
  let todoUpdater: TodoDelete
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

    todoUpdater = await commandInstance.resolve(TodoUpdater)
  })

  it('should exit success when delete todo input is valid', async () => {
    // Arrange
    const processExit = jest
      .spyOn(process, 'exit')
      .mockImplementation((code?: number) => undefined as never)

    const todoUpdaterMock = jest
      .spyOn(todoUpdater, 'execute')

    // Act
    await CommandTestFactory.run(commandInstance, ['update', todo1.todoId.value])

    // Assert
    expect(processExit).toHaveBeenCalledWith(0)
    expect(todoRepositoryMock.updateMock).toHaveBeenCalledTimes(1)
    expect(todoUpdaterMock).toHaveBeenCalledTimes(1)
    expect(processExit).toHaveBeenCalledTimes(1)
    processExit.mockRestore()
  })

  it('should fail status when input is invalid', async () => {
    // Arrange
    const processExit = jest
      .spyOn(process, 'exit')
      .mockImplementation((code?: number) => undefined as never)

    const todoCreatorMock = jest.spyOn(todoUpdater, 'execute')

    // Act
    await CommandTestFactory.run(commandInstance, ['update', 'a'])

    // Assert
    expect(processExit).toHaveBeenCalledWith(5)
    expect(todoRepositoryMock.saveMock).toHaveBeenCalledTimes(0)
    expect(todoCreatorMock).toHaveBeenCalledTimes(0)
    expect(processExit).toHaveBeenCalledTimes(1)
    processExit.mockRestore()
  })
})
