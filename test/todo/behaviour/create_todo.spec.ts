import {CreatedAt, TodoCreator, UpdatedAt} from "../../../src";
import {TodoMother} from "../stubs";
import {TodoRepositoryMock} from "../integration";

let todoRepositoryMock: TodoRepositoryMock;

describe('CreateTodo', () => {
  beforeEach(() => {
    todoRepositoryMock = new TodoRepositoryMock();
    jest.clearAllMocks();
  });

  it('should call use case todo creator', async () => {
    // Arrange
    const todoData = TodoMother.random()

    // Act
    await new TodoCreator(todoRepositoryMock).execute(
      todoData.todoId,
      todoData.todoTitle,
      todoData.todoCompleted,
      new CreatedAt(todoData.createdAt),
      new UpdatedAt(todoData.updatedAt, todoData.createdAt),
    )

    // Assert
    todoRepositoryMock.assertSaveHaveBeenCalledWith(todoData);
  });
});


