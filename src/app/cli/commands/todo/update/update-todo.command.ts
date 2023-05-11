import {StatusCodes} from "http-status-codes"
import {
  ProcessStatusMiddleware, Todo, TodoFinder,
  TodoId, TodoUpdater, UpdatedAt,
} from "../../../../../lib"
import {z} from "zod"
import {CommandRunner, SubCommand} from "nest-commander"

@SubCommand({
  name: 'update',
  arguments: '<id>',
  description: 'Update a todo',
})
export class UpdateTodoCommand extends CommandRunner {
  constructor(
    private todoUpdater: TodoUpdater,
    private todoFinder: TodoFinder
  ) {
    super()
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    try {
      const {id} = this.ensureParams(inputs[0])

      const todo = await this.todoFinder.execute(new TodoId(id))
      const resultTodo = todo.unwrap()

      const newTodo = Todo.from({
        todoId: resultTodo.todoId.value,
        // TODO: deberia llegar por parametro, como 2da pregunta
        todoTitle: "new title",
        createdAt: resultTodo.createdAt,
        updatedAt: new UpdatedAt(new Date(), resultTodo.createdAt).value,
        // TODO: deberia llegar por parametro, como 3ra pregunta y con inquirer
        todoCompleted: !resultTodo.todoCompleted.value,
      })
      // recordar toLowerCase()
      // const a = new CliUtilityService().parseBoolean()

      const result = await this.todoUpdater.execute(newTodo)
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
