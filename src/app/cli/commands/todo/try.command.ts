import {Command, CommandRunner} from "nest-commander"
import {Criteria, Filter, FilterField, FilterOperator, FilterValue, TodoFinder} from "../../../../lib";

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

      const todos = [
        {
          id: '01H0EECR22XTH4FKD8BM831JAD',
          title: 'title 1'
        },
        {
          id: '12',
          title: 'title 2'
        },
      ]

      const criteria = {
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
        orderBy: {
          id: 'asc',
          title: 'desc'
        },
        cursor: {
          id: '01H0EECR22XTH4FKD8BM831JAD'
        },
        take: 1,
        skip: null,
        distinct: ['id', 'title']
      }

      const whereKeys = Object.keys(criteria.where)
      const itemKeys = Object.keys(todos[0])

      if (itemKeys.length !== whereKeys.length) {
        console.log('raro')
      }

      let skipCounter = 0
      let takeCounter = 0
      let canTakeCursor = false
      // reviso cada todo que llega
      const itemFiltered = todos.map((item, index) => {

        let itemObject = {};

        if (criteria.cursor) {

          if (criteria.cursor.id === item.id) {
            canTakeCursor = true
          }

          if (!canTakeCursor) {
            return itemObject
          }

        } else if (criteria.skip && skipCounter < criteria.skip) {
          skipCounter++
          return itemObject
        }

        if (criteria.take && takeCounter >= criteria.take) {
          return itemObject
        }

        // aplico el filtro a cada key del todo
        itemKeys.forEach((key, index) => {

          const itemData = item[key]
          const whereData = criteria.where[key]
          // validacion de where
          if (key === whereKeys[index]) {
            console.log('filter')
          }

          // ingreso el dato de la key al objeto
          itemObject = Object.assign(itemObject, {[key]: itemData})
        })
        takeCounter++
        return itemObject
      })

      console.log(itemFiltered)
      return

      const result = await this.todoFinder.execute(null)
      return
      // const todos = result.unwrap()
      // console.log(render(todos))
    } catch (e) {
      console.log(e)
    }
  }
}

// (x) = filtro rescata datos
// (x)(x) = filtro rescata datos y funciona

// where = filtros(x)
// orderBy = lista orders
// cursor = tomar desde un id hasta take(x)(x)
// take = toma(x)(x)
// skip = salta(x)(x)
// distinct = lista distintos
