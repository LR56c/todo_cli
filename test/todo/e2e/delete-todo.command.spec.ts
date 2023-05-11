import {TestingModule} from '@nestjs/testing'
import {AppModule, TodoDelete, TodoService} from "../../../src"
import {TodoRepositoryMock} from "../stubs"
import {CommandTestFactory} from "nest-commander-testing"
import {TodoMother} from "../stubs";

describe('Delete command', () => {
  let commandInstance: TestingModule

  let todoRepositoryMock: TodoRepositoryMock
  let todoDelete: TodoDelete
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

    todoDelete = await commandInstance
      .resolve(TodoDelete)
  })

  it('should exit success when delete todo input is valid', async () => {
    // Arrange
    const processExit = jest
      .spyOn(process, 'exit')
      .mockImplementation((code?: number) => undefined as never)

    const todoDeleteMock = jest
      .spyOn(todoDelete, 'execute')

    // Act
    await CommandTestFactory.run(commandInstance, ['delete', todo1.todoId.value])

    // Assert
    expect(processExit).toHaveBeenCalledWith(0)
    expect(todoRepositoryMock.deleteMock).toHaveBeenCalledTimes(1)
    expect(todoDeleteMock).toHaveBeenCalledTimes(1)
    expect(processExit).toHaveBeenCalledTimes(1)
    processExit.mockRestore()
  })

  it('should fail status when input is invalid', async () => {
    // Arrange
    const processExit = jest
      .spyOn(process, 'exit')
      .mockImplementation((code?: number) => undefined as never)

    const todoDeleteMock = jest
      .spyOn(todoDelete, 'execute')

    // Act
    await CommandTestFactory.run(commandInstance, ['delete', 'a'])

    // Assert
    expect(processExit).toHaveBeenCalledWith(5)
    expect(todoRepositoryMock.saveMock).toHaveBeenCalledTimes(0)
    expect(todoDeleteMock).toHaveBeenCalledTimes(0)
    expect(processExit).toHaveBeenCalledTimes(1)
    processExit.mockRestore()
  })
})
