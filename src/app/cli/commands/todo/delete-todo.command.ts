import {StatusCodes} from "http-status-codes"
import {
  ProcessStatusMiddleware,
  TodoDelete,
  TodoId,
} from "../../../../lib"
import {z} from "zod"
import {Command, CommandRunner} from "nest-commander"

@Command({
  name: 'delete',
  arguments: '<id>',
  description: 'Delete a todo',
})
export class DeleteTodoCommand extends CommandRunner {
  constructor(private todoDelete: TodoDelete) {
    super()
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    try {
      const {id} = this.ensureParams(inputs[0])

      const result = await this.todoDelete.execute(
        new TodoId(id),
      )

      result.unwrap()
      ProcessStatusMiddleware(StatusCodes.OK)
    } catch (e) {
      ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
    }
  }

  private ensureParams(uuid: string) {
    return {
      id: z.string().uuid().parse(uuid)
    }
  }
}
