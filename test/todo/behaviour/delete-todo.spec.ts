import {TodoMother} from "../stubs";
import {TodoRepositoryMock} from "../integration";
import {TodoDelete} from "../../../src";

describe('TodoDelete', () => {

  const todo1 = TodoMother.random()
  let todoRepositoryMock: TodoRepositoryMock

  beforeEach(() => {
    jest.clearAllMocks()
    todoRepositoryMock = new TodoRepositoryMock([todo1])
  })

  it('should delete todo from database', async () => {
    // Act
    const result = await new TodoDelete(todoRepositoryMock).execute(
      todo1.todoId,
    )

    // Assert
    expect(result.isOk()).toBe(true)
    todoRepositoryMock.assertDeleteHaveBeenCalledWith(todo1.todoId)
  })

  it('should fail when database throw error', async () => {
    // Act
    todoRepositoryMock.deleteError()

    // Act
    const result = await new TodoDelete(todoRepositoryMock).execute(
      todo1.todoId,
    )

    // Assert
    expect(result.isErr()).toBe(true)
  })
})
