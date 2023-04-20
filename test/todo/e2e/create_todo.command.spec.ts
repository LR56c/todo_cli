import {Test} from '@nestjs/testing';
import {CommandModule, CommandModuleTest} from 'nestjs-command';
import {AppModule} from "../../../src";

describe('Create command', () => {
  let commandModule: CommandModuleTest;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

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
    const user = await commandModule.execute(commandText, {});
    expect(processExit).toHaveBeenCalledWith(10);
    // expect(processExit).toHaveBeenCalledTimes(1)
    // expect(user).toBe(201);

    processExit.mockRestore();

    // TODO: mockear repo, usecase. validar que se ejecuta y valida
    // const spawnSpy = jest.spyOn(childProcess, 'spawn');
    // expect(spawnSpy).toBeCalledWith('echo Hello World!', { shell: true });

    // const exitSpy = jest.spyOn(process, 'exit');
    // expect(exitSpy).toBeCalledWith(201, { shell: true });
    // expect(exitSpy).toBeCalledTimes(1)
  });
});
