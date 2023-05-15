import {Command, CommandRunner} from "nest-commander"
import {
  TodosFindManyArgsSchema
} from "../../../../../prisma/generated/zod";

@Command({
  name: 'try',
  options: {
    isDefault: true
  }
})
export class TryCommand extends CommandRunner {
  constructor(
  ) {
    super()
  }

  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    try {
      console.log('Try command')
      // const result = await this.todoCreator.execute(
      //     // new TodoId(uuid()),
      //     new TodoId(ulid()),
      //     new TodoTitle("Fluctui, cedrium, et adelphis."),
      //     new TodoCompleted(false),
      //     new CreatedAt(new Date()),
      //     new UpdatedAt(new Date(), new Date()))

      const takeObject = {
        take: 1
      }

      const whereObject = {
        where: {
          id: {
            equals: '01F9ZQZQZQZQZQZQZQZQZQZQZQ'
          }
        }
      }

      const skipObject = {
        skip: 1
      }
      console.log(TodosFindManyArgsSchema.parse(Object.assign({}, takeObject, whereObject, skipObject)))
      // const criteria = new Criteria()
      return
      // const result = await this.todoFinder.execute(null)
      // const todos = result.unwrap()
      // console.log(render(todos))
    } catch (e) {
      console.log(e)
    }
  }
}
