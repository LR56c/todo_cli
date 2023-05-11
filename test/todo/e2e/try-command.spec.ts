import {TestingModule} from '@nestjs/testing'
import {AppModule} from "../../../src"
import {CommandTestFactory} from "nest-commander-testing"
import * as childProcess from "child_process";
import * as os from "os";
import { spawn } from 'child_process';

describe('Create command', () => {
  let commandInstance: TestingModule

  beforeEach(async () => {
    jest.clearAllMocks()

    commandInstance = await CommandTestFactory.createTestingCommand({
      imports: [AppModule]
    })
      .compile()
  })

  it('should', async () => {
    // Arrange
    const spawnSpy = jest.spyOn(childProcess, 'spawn')
      // .mockImplementation((code?: number) => undefined as never)

    // Act
    // CommandTestFactory.setAnswers(['eco']);
    // await CommandTestFactory.run(commandInstance, ['my-exec', 'foo'])
    // await CommandTestFactory.run(commandInstance, ['my-exec'])
    // await CommandTestFactory.run(commandInstance, ['try', '-h'])
    // spawn('eco', { shell: "zsh" })
    // Assert
    // expect(spawnSpy).toBeCalledWith('eco', { shell: "zsh" });
  })
})
