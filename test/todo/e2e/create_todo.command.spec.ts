import {TestingModule} from "@nestjs/testing";
import {CommandTestFactory} from "nest-commander-testing";
import * as childProcess from "child_process";
import { AppModule } from "../../../src";

describe('Task Command', () => {
  let commandInstance: TestingModule;

  beforeAll(async () => {
    commandInstance = await CommandTestFactory.createTestingCommand({
      imports: [AppModule]
    }).compile();
  });

  it('should call the "run" method', async () => {
    // TODO: mockear repo, usecase. validar que se ejecuta y valida
    // const exitSpy = jest.spyOn(process, 'exit');
    // const spawnSpy = jest.spyOn(childProcess, 'spawn');
    // await CommandTestFactory.run(commandInstance, ['echo Hello World!']);
    // expect(spawnSpy).toBeCalledWith('echo Hello World!', { shell: true });
    // expect(exitSpy).toBeCalledWith(10, { shell: true });
    // expect(exitSpy).toBeCalledTimes(1)
  });
});
