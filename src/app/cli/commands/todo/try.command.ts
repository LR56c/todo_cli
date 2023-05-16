import {Command, CommandRunner} from "nest-commander"
import {TodoFinder} from "../../../../lib";

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

      // const criteria = new Criteria([
      //   new Filter(
      //     new FilterField('id'),
      //     new FilterOperator('equals'),
      //     new FilterValue('01H0EECR22XTH4FKD8BM831JAD')
      //   )
      // ])
      console.log('Try command')

      const data = [
        {
          id: '01H0EECR22XTH4FKD8BM831JAD',
          title: 'title 1'
        },
        {
          id: '12',
          title: 'title 2'
        },
      ]

      console.log(Object.keys(data[0])) // [ 'id', 'title' ]

      const filter = {
        where: {
          id: {
            equals: '01H0EECR22XTH4FKD8BM831JAD'
          },
          title: {
            equals: 'title 1'
          },
          as: {
            equals: 'title 1'
          }
        },
        limit: 1
      }

      // colocar keys de filter.where en un objecto con solo las keys
      // const whereKeys = Object.keys(filter.where).reduce((acc, key) => {
      //   return Object.assign(acc, {key})
      // })
      // console.log(whereKeys) // [ 'id', 'title', 'as' ]
      return
      const result = data.map((item) => {
        return Object.keys(item).map((key) => {
          console.log(item[key])
          console.log(whereKeys[key])
          if (whereKeys[key] === item[key]) {
            if (filter.where[key].equals === item[key]) {
              return item[key]
            }
          } else {
            console.log('no filter')
          }
        })
      })

      // console.log(result)

      // console.log('end')
      return

      // const result = await this.todoFinder.execute(criteria)
      // const todos = result.unwrap()
      // console.log(render(todos))
    } catch (e) {
      console.log(e)
    }
  }
}

