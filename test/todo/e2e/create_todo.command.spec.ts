import {Test} from '@nestjs/testing';
import {CommandModule, CommandModuleTest} from 'nestjs-command';
import {AppModule} from "../../../src";

describe('Create command', () => {
  let commandModule: CommandModuleTest;
  // let todoService = { getTodos: ()=> ["hol", "a"]}

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      // .overrideProvider(TodoService)
      // .useValue(todoService)
      .compile();

    const app = moduleFixture.createNestApplication();
    await app.init();
    commandModule = new CommandModuleTest(app.select(CommandModule));
  });

  it('should create todo', async () => {
    const processExit = jest
        .spyOn(process, 'exit')
        .mockImplementation((code?: number) => undefined as never);
    const commandText = 'create';


    // TODO: mockear repo, usecase. validar que se ejecuta y valida
    const resultCommand = await commandModule.execute(commandText, {});

    expect(processExit).toHaveBeenCalledWith(200);
    // expect(processExit).toHaveBeenCalledTimes(1)

    processExit.mockRestore();

    // const spawnSpy = jest.spyOn(childProcess, 'spawn');
    // expect(spawnSpy).toBeCalledWith('echo Hello World!', { shell: true });

    // const exitSpy = jest.spyOn(process, 'exit');
    // expect(exitSpy).toBeCalledWith(201, { shell: true });
    // expect(exitSpy).toBeCalledTimes(1)
  });
});
