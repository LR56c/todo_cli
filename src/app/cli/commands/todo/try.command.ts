import {Command, CommandRunner} from "nest-commander"
import {Criteria, Filter, FilterField, FilterOperator, FilterValue, TodoFinder} from "../../../../lib";
import {render} from "prettyjson";

@Command({
  name: 'try',
  options: {
    isDefault: true
  }
})
export class TryCommand extends CommandRunner {
  constructor(
    private todoFinder: TodoFinder,
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

      const criteria = new Criteria([
        new Filter(
          new FilterField('id'),
          new FilterOperator('equals'),
          new FilterValue('01H0EECR22XTH4FKD8BM831JAD')
        )
      ])
      const result = await this.todoFinder.execute(criteria)
      const todos = result.unwrap()
      console.log(render(todos))
    } catch (e) {
      console.log(e)
    }
  }
}
