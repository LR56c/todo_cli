import {Command, CommandRunner, InquirerService} from "nest-commander";
import {ProcessStatusMiddleware} from "../../../../lib";
import {StatusCodes} from "http-status-codes";

@Command({
  name: 'try',
  description: 'desc test',
  options: { isDefault: true }
})
export class TryCommand extends CommandRunner {

  constructor(private readonly inquirer : InquirerService) {
    super();
  }
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    try {
      let task1 = (await this.inquirer.ask<{ task: string }>('try-question1', undefined)).task;
      console.log('-----task1-----')
      console.log(task1)
      let task2 = (await this.inquirer.ask<{ task: string }>('try-question2', undefined)).task;
      console.log('-----task2-----')
      console.log(task2)
      ProcessStatusMiddleware(StatusCodes.OK)
    } catch (e) {
      console.log('-----e-----')
      console.log(e)
      ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
    }
  }
}
