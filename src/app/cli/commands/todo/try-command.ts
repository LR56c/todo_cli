import {Command, CommandRunner, InquirerService} from "nest-commander";
import {ProcessStatusMiddleware} from "../../../../lib";
import {StatusCodes} from "http-status-codes";

@Command({
  name: 'try',
  // arguments: '<id>',
  description: 'desc test',
  options: {isDefault: true}
})
export class TryCommand extends CommandRunner {

  constructor(private readonly inquirer: InquirerService) {
    super();
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    try {
      let id = inputs[0];

      if (id === '1') {
        ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
        return
      }

      let {title, completed} = (await this.inquirer.ask<{
        title: string,
        completed: boolean
      }>('try-questions', undefined));

      if (!completed) {
        ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
        return
      }

      ProcessStatusMiddleware(StatusCodes.OK)
    } catch (e) {
      console.log('-----e-----')
      console.log(e)
      ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
    }
  }
}
