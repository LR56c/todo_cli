import {StatusCodes} from "http-status-codes"
import {CommandRunner, SubCommand} from "nest-commander"
import {ProcessStatusMiddleware, TodosFinder} from "../../../../../lib";

@SubCommand({
  name: 'all',
  description: 'Find all todos',
})
export class FindAllTodoCommand extends CommandRunner {
  constructor(private todosFinder: TodosFinder) {
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
