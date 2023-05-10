import {TodoMother, TodoTitleMother} from "../stubs";
import {TodoRepositoryMock} from "../integration";
import {CreatedAt, Todo, TodoInMemory, TodoUpdater, UpdatedAt} from "../../../src";

describe('TodoUpdate', () => {

  const todo1 = TodoMother.random()

  const newTodo1 = Todo.from(
    {
      todoId: todo1.todoId.value,
      todoTitle: TodoTitleMother.random().value,
      todoCompleted: todo1.todoCompleted.value,
      createdAt: todo1.createdAt,
      updatedAt: todo1.updatedAt,
    }
  )

  let todoRepositoryMock: TodoRepositoryMock

  beforeEach(() => {
    jest.clearAllMocks()
    todoRepositoryMock = new TodoRepositoryMock(new TodoInMemory([todo1]))
  })

  it('should update todo from database', async () => {
    // Act
    const result = await new TodoUpdater(todoRepositoryMock).execute(
      newTodo1,
    )

    // Assert
    expect(result.isOk()).toBe(true)
    todoRepositoryMock.assertUpdateHaveBeenCalledWith(newTodo1)
  })

  it('should fail when database throw error', async () => {
    // Act
    todoRepositoryMock.updateError()

    // Act
    const result = await new TodoUpdater(todoRepositoryMock).execute(
      newTodo1,
    )

    // Assert
    expect(result.isErr()).toBe(true)
  })
})
