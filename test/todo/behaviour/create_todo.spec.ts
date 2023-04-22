import {CreatedAt, CreateTodo, TodoRepository, UpdatedAt} from "../../../src";
import {TodoMother} from "../stubs";

describe('CreateTodo', () => {

  it('should call use case', async () => {
    // Arrange
    const todoRepositoryMock: jest.Mocked<TodoRepository> = {
      createTodo: jest.fn(),
    } as unknown as jest.Mocked<TodoRepository>;

    const todoData = TodoMother.random()
    // Act
    new CreateTodo(todoRepositoryMock).execute(
      todoData.todoId,
      todoData.todoTitle,
      todoData.todoCompleted,
      new CreatedAt(todoData.createdAt),
      new UpdatedAt(todoData.updatedAt, todoData.createdAt),
    )

    // Assert
    expect(todoRepositoryMock.createTodo).toHaveBeenLastCalledWith(todoData);
  });
});
