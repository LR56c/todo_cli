import {CreatedAt, CreateTodo, UpdatedAt} from "../../../src";
import {TodoMother} from "../stubs";
import {TodoRepositoryMock} from "../integration/todo-repository-mock";

let todoRepositoryMock: TodoRepositoryMock;

describe('CreateTodo', () => {
  beforeEach(() => {
    todoRepositoryMock = new TodoRepositoryMock();
    jest.clearAllMocks();
  });

  it('should call use case', async () => {
    // Arrange
    const todoData = TodoMother.random()

    // Act
    await new CreateTodo(todoRepositoryMock).execute(
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


