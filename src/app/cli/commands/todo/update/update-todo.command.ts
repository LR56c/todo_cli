import {StatusCodes} from "http-status-codes"
import {
  ProcessStatusMiddleware, Todo, TodoFinder,
  TodoId, TodoUpdater, UpdatedAt,
} from "../../../../../lib"
import {z} from "zod"
import {CommandRunner, InquirerService, SubCommand} from "nest-commander"
import {render} from "prettyjson";

@SubCommand({
  name: 'update',
  arguments: '<id>',
  description: 'Update a todo',
})
export class UpdateTodoCommand extends CommandRunner {
  constructor(
    private todoUpdater: TodoUpdater,
    private todoFinder: TodoFinder,
    private readonly inquirer: InquirerService
  ) {
    super()
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    try {
      const {id} = this.ensureParams(inputs[0])

      // const todo = await this.todoFinder.execute(new TodoId(id))
      const todo = await this.todoFinder.execute(null)
      const resultTodo = todo.unwrap()

      console.log(render(resultTodo))

      let {title, completed} = (await this.inquirer.ask<{
        title: string,
        completed: boolean
      }>('update-questions', undefined));

      const newTodo = Todo.from({
        todoId: resultTodo.todoId.value,
        todoTitle: title,
        createdAt: resultTodo.createdAt,
        updatedAt: new UpdatedAt(new Date(), resultTodo.createdAt).value,
        todoCompleted: completed,
      })

      const result = await this.todoUpdater.execute(newTodo)
      result.unwrap()

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
