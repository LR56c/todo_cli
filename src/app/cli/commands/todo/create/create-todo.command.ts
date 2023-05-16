import {StatusCodes} from "http-status-codes"
import {
  CreatedAt,
  ProcessStatusMiddleware,
  TodoCompleted,
  TodoCreator,
  TodoId,
  TodoTitle,
  UpdatedAt
} from "../../../../../lib"
import { ulid } from "ulidx"
import {z} from "zod"
import {CommandRunner, SubCommand} from "nest-commander"

@SubCommand({
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
      const {title} = this.ensureParams(inputs[0])

      const result = await this.todoCreator.execute(
        // new TodoId(uuid()),
        new TodoId(ulid()),
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

  private ensureParams(title: string) {
    return {
      title: z.string().parse(title)
    }
  }
}
