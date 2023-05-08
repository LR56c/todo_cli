import {StatusCodes} from "http-status-codes"
import {
  CreatedAt,
  ProcessStatusMiddleware,
  TodoCompleted,
  TodoCreator,
  TodoId,
  TodoTitle,
  UpdatedAt
} from "../../../../lib"
import {v4 as uuid} from "uuid"
import {z} from "zod"
import {Command, CommandRunner} from "nest-commander"

@Command({
  name: 'create',
  arguments: '<title>',
  description: 'Create a todo',
})
export class CreateTodoCommand extends CommandRunner {
  constructor(private todoCreator: TodoCreator) {
    super()
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    try {
      const title = this.ensureParams(inputs[0])

      const result = await this.todoCreator.execute(
        new TodoId(uuid()),
        new TodoTitle(title),
        new TodoCompleted(false),
        new CreatedAt(new Date()),
        new UpdatedAt(new Date(), new Date()))

      result.unwrap()
      ProcessStatusMiddleware(StatusCodes.OK)
    } catch (e) {
      ProcessStatusMiddleware(StatusCodes.BAD_REQUEST)
    }
  }

  private ensureParams(title: string): string {
    return z.string().parse(title)
  }
}
