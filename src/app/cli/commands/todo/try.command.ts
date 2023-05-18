import {Command, CommandRunner} from "nest-commander"
import {
  CreatedAt,
  Criteria,
  Filter,
  FilterField,
  FilterOperator,
  FilterValue,
  Order,
  Todo, TodoCompleted,
  TodoFinder,
  TodoId, TodoTitle, UpdatedAt
} from "../../../../lib"
import {TodoMother} from "../../../../../test";

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

      // const criteriaTry = {
      //   where: {
      //     id: {
      //       equals: '01H0EECR22XTH4FKD8BM831JAD'
      //     },
      //     completed: {
      //       equals: false
      //     },
      //     title: {
      //       equals: 'title 1'
      //     },
      //     as: {
      //       equals: 'title 1'
      //     }
      //   },
      //   orderBy: {
      //     id: 'asc',
      //     title: 'desc'
      //   },
      //   cursor: {
      //     id: '01H0EECR22XTH4FKD8BM831JAD'
      //     // id: null
      //   },
      //   take: 2,
      //   skip: null,
      //   distinct: ['id', 'title']
      // }

      const todos = [
        Todo.create(
          new TodoId('01H0PKXF3QE8VMARP58Z5RQC7J'),
          new TodoTitle('title 1'),
          new TodoCompleted(false),
          new CreatedAt(new Date()),
          new UpdatedAt(new Date(), new Date())
        ),
        Todo.create(
          new TodoId('01H0PKXF3QH9MWQDTQK2MDEMTW'),
          new TodoTitle('title 2'),
          new TodoCompleted(false),
          new CreatedAt(new Date()),
          new UpdatedAt(new Date(), new Date())
        ),
        Todo.create(
          new TodoId('01H0PKXF3QDMHEQ5J1SD158GRM'),
          new TodoTitle('title 3'),
          new TodoCompleted(false),
          new CreatedAt(new Date()),
          new UpdatedAt(new Date(), new Date())
        )
      ]

      const criteria = new Criteria((
        [
          new Filter(
            new FilterField('todoId'),
            new FilterOperator('equals'),
            new FilterValue('01H0PKXF3QE8VMARP58Z5RQC7J')
          ),
          // new Filter(
          //   new FilterField('todoCompleted'),
          //   new FilterOperator('equals'),
          //   new FilterValue('false')
          // ),
          // new Filter(
          //   new FilterField('todoTitle'),
          //   new FilterOperator('equals'),
          //   new FilterValue('title 1')
          // ),
          // new Filter(
          //   new FilterField('as'),
          //   new FilterOperator('equals'),
          //   new FilterValue('a')
          // )
        ]
      ))
      const fil = this.whereList(todos, criteria.filters)
      console.log('fil')
      console.log(fil)

      return
      // const distinctedData : TodoTry[] = criteriaTry.distinct.reduce((result, attribute) => this.distinctList(result, attribute), dataList)

      // const orders = [
      //   new Order(new OrderBy('title'), new OrderType(OrderTypes.ASC)),
      //   new Order(new OrderBy('id'), new OrderType(OrderTypes.ASC)),
      // ]
      // const orderedData: TodoTry[] = this.orderByCriteria(distinctedData, orders)

      // let skipCounter = 0
      // let takeCounter = 0
      //
      // const cursorId = criteriaTry.cursor.id;
      // const skipValue = criteriaTry.skip;
      // const takeValue = criteriaTry.take;
      //
      // let canTakeCursor = false
      //
      // let dataLimited: TodoTry[] = []
      // for (let data of dataList) {
      //
      //   if (cursorId !== null) {
      //
      //     if (cursorId === data.id) {
      //       canTakeCursor = true
      //     }
      //
      //     if (!canTakeCursor) continue
      //
      //   } else if (skipValue !== null && skipCounter < skipValue) continue
      //
      //   if (takeValue !== null && takeCounter >= takeValue) break
      //
      //   dataLimited.push(data)
      //   takeCounter++
      // }
      // return

      const result = await this.todoFinder.execute(null)
      // const todos = result.unwrap()
      // console.log(render(todos))
    } catch (e) {
      console.log(e)
    }
  }

  distinctListSet<T>(list: T[], uniqueAttribute: keyof T): T[] {
    const uniqueValues = new Set<T[typeof uniqueAttribute]>()
    const distinctList: T[] = []

    for (const obj of list) {
      const uniqueValue = obj[uniqueAttribute]

      if (!uniqueValues.has(uniqueValue)) {
        uniqueValues.add(uniqueValue)
        distinctList.push(obj)
      }
    }

    return distinctList
  }


  whereList(todos: Todo[], filters: Filter[]): Todo[] {

    const filteredTodos: Todo[] = []
    const refinedFilters: Filter[] = []
    const todo1 = todos[0]

    for (const filter of filters) {
      if (!todo1.hasOwnProperty(filter.field.value)) break
      refinedFilters.push(filter)
    }

    for (const todo of todos) {
      let match = false
      for (const filter of refinedFilters) {
        const filterField = filter.field.value
        const filterOperator = filter.operator.value
        const filterValue = filter.value.value

        if (filterOperator === 'equals') {
          if (todo[filterField].value !== filterValue) break
        }

        match = true
      }

      if (match)
        filteredTodos.push(todo)
    }

    return filteredTodos
  }


  distinctList<T>(list: T[], uniqueAttribute: string): T[] {
    const uniqueValues = new Set<string>()
    const distinctList: T[] = []

    for (const obj of list) {
      const uniqueValue = obj[uniqueAttribute]

      if (!uniqueValues.has(uniqueValue)) {
        uniqueValues.add(uniqueValue)
        distinctList.push(obj)
      }
    }

    return distinctList
  }

  orderByCriteria<T>(list: T[], sortCriteria: Order[]): T[] {
    return list.sort((a, b) => {
      for (const criteria of sortCriteria) {
        const attribute = criteria.orderBy.value
        const order = criteria.orderType.value

        if (a[attribute] < b[attribute]) {
          return order === 'asc' ? -1 : 1
        } else {
          return order === 'asc' ? 1 : -1
        }
      }
      return 0
    })
  }
}

// (x) = filtro rescata datos
// (x)(x) = filtro rescata datos y funciona

// 1.where
// 2.distinct
// 3.orderBy
// 4.cursor y take/limit

// where = filtros(x)(x)*
// orderBy = lista orders(x)(x)
// cursor = tomar desde un id hasta take(x)(x)
// take = toma(x)(x)
// skip = salta(x)(x)
// distinct = lista distintos(x)(x)
