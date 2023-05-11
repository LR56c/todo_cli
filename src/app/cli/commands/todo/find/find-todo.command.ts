import {StatusCodes} from "http-status-codes"
import {CommandRunner, SubCommand} from "nest-commander"
import {ProcessStatusMiddleware, TodoFinder} from "../../../../../lib";

@SubCommand({
  name: 'find',
  arguments: '<id>',
  description: 'Find by id a todo',
})
export class FindTodoCommand extends CommandRunner {
  constructor(private todoFinder: TodoFinder) {
    super()
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    try {
      ProcessStatusMiddleware(StatusCodes.OK)
    } catch (e) {
      ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
    }
  }

}
