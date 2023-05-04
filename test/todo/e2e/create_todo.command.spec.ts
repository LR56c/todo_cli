import {Test, TestingModule} from '@nestjs/testing';
import {AppModule, TodoCreator, TodoService} from "../../../src";
import {TodoRepositoryMock} from "../integration";
import {CommandTestFactory} from "nest-commander-testing";

describe('Create command', () => {
  let commandInstance: TestingModule;

  let todoRepositoryMock: TodoRepositoryMock
  let todoCreator: TodoCreator

  beforeEach(async () => {
    jest.clearAllMocks();
    todoRepositoryMock = new TodoRepositoryMock([]);

    commandInstance = await CommandTestFactory.createTestingCommand({
      imports: [AppModule]
    })
      .overrideProvider(TodoService)
      .useValue(todoRepositoryMock)
      .compile();

    todoCreator = await commandInstance
      .resolve(TodoCreator)
  });

  it('should create todo', async () => {
    // Arrange
    const processExit = jest
      .spyOn(process, 'exit')
      .mockImplementation((code?: number) => undefined as never);

    const todoCreatorMock = jest
      .spyOn(todoCreator, 'execute')

    // Act
    await CommandTestFactory.run(commandInstance, ['create', 'foo']);

    // Assert
    expect(processExit).toHaveBeenCalledWith(0);
    expect(todoRepositoryMock.saveMock).toHaveBeenCalledTimes(1);
    expect(todoCreatorMock).toHaveBeenCalledTimes(1);
    expect(processExit).toHaveBeenCalledTimes(1)
    processExit.mockRestore();

    // const spawnSpy = jest.spyOn(childProcess, 'spawn');
    // expect(spawnSpy).toBeCalledWith('echo Hello World!', { shell: true });

    // const exitSpy = jest.spyOn(process, 'exit');
    // expect(exitSpy).toBeCalledWith(201, { shell: true });
    // expect(exitSpy).toBeCalledTimes(1)
  });
});
