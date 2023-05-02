import {Test} from '@nestjs/testing';
import {CommandModule, CommandModuleTest} from 'nestjs-command';
import {AppModule, TodoCreator, TodoInMemory, TodoService} from "../../../src";
import {TodoRepositoryMock} from "../integration";
import {TodoMother} from "../stubs";

describe('Create command', () => {
  let commandModule: CommandModuleTest;

  let todoRepositoryMock: TodoRepositoryMock
  let todoCreator: TodoCreator

  beforeEach(async () => {
    jest.clearAllMocks();
    todoRepositoryMock = new TodoRepositoryMock([]);

    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(TodoService)
      .useValue(todoRepositoryMock)
      .compile();

    todoCreator = await moduleFixture
      .resolve(TodoCreator)

    const app = moduleFixture.createNestApplication();
    await app.init();
    commandModule = new CommandModuleTest(app.select(CommandModule));
  });

  it('should create todo', async () => {
    // Arrange
    const processExit = jest
      .spyOn(process, 'exit')
      .mockImplementation((code?: number) => undefined as never);

    const todoCreatorMock = jest
      .spyOn(todoCreator, 'execute')

    const commandText = 'create';

    // Act
    const resultCommand = await commandModule.execute(commandText, {});

    // Assert
    expect(processExit).toHaveBeenCalledWith(200);
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
