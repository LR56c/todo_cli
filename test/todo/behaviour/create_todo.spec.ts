import {CreatedAt, TodoCreator, UpdatedAt} from "../../../src"
import {TodoMother, TodoRepositoryMock} from "../stubs"

describe('CreateTodo', () => {

  let todoRepositoryMock: TodoRepositoryMock

  beforeEach(() => {
    jest.clearAllMocks()
    todoRepositoryMock = new TodoRepositoryMock([])
  })

  it('should create todo to database load', async () => {
    // Arrange
    const todoData = TodoMother.random()

    // Act
    const result = await new TodoCreator(todoRepositoryMock).execute(
      todoData.todoId,
      todoData.todoTitle,
      todoData.todoCompleted,
      new CreatedAt(todoData.createdAt.value),
      new UpdatedAt(todoData.updatedAt.value, todoData.createdAt.value),
    )

    // Assert
    expect(result.isOk()).toBe(true)
    todoRepositoryMock.assertSaveHaveBeenCalledWith(todoData)
  })

  it('should fail when database throw error', async () => {
    // Arrange
    const todoData = TodoMother.random()

    // Act
    todoRepositoryMock.createError()

    const result = await new TodoCreator(todoRepositoryMock).execute(
      todoData.todoId,
      todoData.todoTitle,
      todoData.todoCompleted,
      new CreatedAt(todoData.createdAt.value),
      new UpdatedAt(todoData.updatedAt.value, todoData.createdAt.value),
    )

    // Assert
    expect(result.isErr()).toBe(true)
  })
})
