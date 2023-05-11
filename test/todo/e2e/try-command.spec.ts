import {TestingModule} from '@nestjs/testing'
import {AppModule} from "../../../src"
import {CommandTestFactory} from "nest-commander-testing"

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
    // const spawnSpy = jest.spyOn(childProcess, 'spawn')
      // .mockImplementation((code?: number) => undefined as never)
    const processExit = jest
      .spyOn(process, 'exit')
      .mockImplementation((code?: number) => undefined as never)

    // Act
    CommandTestFactory.setAnswers(['titleee', 'y']);
    await CommandTestFactory.run(commandInstance, ['try', 'asd'])

    // Assert
    expect(processExit).toHaveBeenCalledWith(0)
    // spawn('eco', { shell: "zsh" })
    // expect(spawnSpy).toBeCalledWith('eco', { shell: "zsh" });
  })
})
