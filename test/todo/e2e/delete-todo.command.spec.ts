import {TestingModule} from '@nestjs/testing'
import {AppModule, TodoDelete, TodoInMemory, TodoService} from "../../../src"
import {TodoRepositoryMock} from "../integration"
import {CommandTestFactory} from "nest-commander-testing"

describe('Delete command', () => {
  let commandInstance: TestingModule

  let todoRepositoryMock: TodoRepositoryMock
  let todoDelete: TodoDelete

  beforeEach(async () => {
    jest.clearAllMocks()
    todoRepositoryMock = new TodoRepositoryMock(new TodoInMemory([]))

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

    const todoCreatorMock = jest
      .spyOn(todoDelete, 'execute')

    // Act
    await CommandTestFactory.run(commandInstance, ['create', 'f1234'])

    // Assert
    expect(processExit).toHaveBeenCalledWith(0)
    expect(todoRepositoryMock.saveMock).toHaveBeenCalledTimes(1)
    expect(todoCreatorMock).toHaveBeenCalledTimes(1)
    expect(processExit).toHaveBeenCalledTimes(1)
    processExit.mockRestore()
  })

  // it('should fail status when input is invalid', async () => {
  //   // Arrange
  //   const processExit = jest
  //     .spyOn(process, 'exit')
  //     .mockImplementation((code?: number) => undefined as never)
  //
  //   const todoCreatorMock = jest
  //     .spyOn(todoDelete, 'execute')
  //
  //   // Act
  //   await CommandTestFactory.run(commandInstance, ['create', 'a'])
  //
  //   // Assert
  //   expect(processExit).toHaveBeenCalledWith(5)
  //   expect(todoRepositoryMock.saveMock).toHaveBeenCalledTimes(0)
  //   expect(todoCreatorMock).toHaveBeenCalledTimes(0)
  //   expect(processExit).toHaveBeenCalledTimes(1)
  //   processExit.mockRestore()
  // })
})
