import {StatusCodes} from "http-status-codes"
import {
  CreatedAt,
  ProcessStatusMiddleware,
  TodoCompleted,
  TodoCreator, TodoDelete,
  TodoId,
  TodoTitle,
  UpdatedAt
} from "../../../../lib"
import {v4 as uuid} from "uuid"
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
      const title = this.ensureParams(inputs[0])

      const result = await this.todoDelete.execute(
        new TodoId(uuid()),
      )

      result.unwrap()
      ProcessStatusMiddleware(StatusCodes.OK)
    } catch (e) {
      ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
    }
  }

  private ensureParams(uuid: string): string {
    return z.string().uuid()
  }
}
