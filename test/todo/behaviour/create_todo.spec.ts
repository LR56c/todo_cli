import {CreatedAt, TodoCreator, UpdatedAt} from "../../../src";
import {TodoMother} from "../stubs";
import {TodoRepositoryMock} from "../integration";


describe('CreateTodo', () => {
  let todoRepositoryMock: TodoRepositoryMock;
  beforeEach(() => {
    jest.clearAllMocks();
    todoRepositoryMock = new TodoRepositoryMock([]);
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


