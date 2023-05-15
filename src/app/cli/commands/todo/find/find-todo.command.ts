import {StatusCodes} from "http-status-codes"
import {CommandRunner, SubCommand} from "nest-commander"
import {ProcessStatusMiddleware, TodoFinder, TodoId} from "../../../../../lib";
import {z} from "zod";
import {render} from "prettyjson";

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
      const {id} = this.ensureParams(inputs[0])
      const result = await this.todoFinder.execute(new TodoId(id))
      const todo = result.unwrap()
      console.log(render(todo))
      ProcessStatusMiddleware(StatusCodes.OK)
    } catch (e) {
      ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
    }
  }

  private ensureParams(id: string) {
    return {
      id: z.string().ulid().parse(id)
      // id: z.string().uuid().parse(id)
    }
  }
}
