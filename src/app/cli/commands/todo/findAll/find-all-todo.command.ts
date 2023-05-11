import {StatusCodes} from "http-status-codes"
import {CommandRunner, SubCommand} from "nest-commander"
import {ProcessStatusMiddleware, TodosFinder} from "../../../../../lib";
import {render} from "prettyjson";

@SubCommand({
  name: 'list',
  description: 'Find all todos',
  aliases: ['ls'],
})
export class FindAllTodoCommand extends CommandRunner {
  constructor(private todosFinder: TodosFinder) {
    super()
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    try {
      const result = await this.todosFinder.execute()
      const todos = result.unwrap()
      console.log(render(todos))
      ProcessStatusMiddleware(StatusCodes.OK)
    } catch (e) {
      ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
    }
  }

}
