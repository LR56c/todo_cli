import {CreatedAt, TodoCreator, UpdatedAt} from "../../../src"
import {TodoMother} from "../stubs"
import {TodoRepositoryMock} from "../integration"

describe('CreateTodo', () => {
  let todoRepositoryMock: TodoRepositoryMock
  beforeEach(() => {
    jest.clearAllMocks()
    todoRepositoryMock = new TodoRepositoryMock([])
  })

  it('should create todo when input is valid', async () => {
    // Arrange
    const todoData = TodoMother.random()

    // Act
    const result = await new TodoCreator(todoRepositoryMock).execute(
      todoData.todoId,
      todoData.todoTitle,
      todoData.todoCompleted,
      new CreatedAt(todoData.createdAt),
      new UpdatedAt(todoData.updatedAt, todoData.createdAt),
    )

    // Assert
    expect(result.isOk()).toBe(true)
    todoRepositoryMock.assertSaveHaveBeenCalledWith(todoData)
  })

  // it('should fail when input is invalid', async () => {
  //   // Arrange
  //   const todoData = TodoMother.invalid()
  //
  //   // Act
  //   const result = await new TodoCreator(todoRepositoryMock).execute(
  //     todoData.todoId,
  //     todoData.todoTitle,
  //     todoData.todoCompleted,
  //     new CreatedAt(todoData.createdAt),
  //     new UpdatedAt(todoData.updatedAt, todoData.createdAt),
  //   )
  //
  //   // Assert
  //   expect(result.isErr()).toBe(true)
  //   //todoRepositoryMock.assertSaveHaveBeenCalledWith(todoData)
  // })
})


