import {Command, CommandRunner} from "nest-commander"
import {Order, OrderBy, OrderType, OrderTypes, TodoFinder} from "../../../../lib"

interface Person {
  id: number
  name: string
  age: number
}

interface TodoTry {
  id: string
  title: string
}

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

      // const people: Person[] = [
      //   { id: 1, name: 'John', age: 25 },
      //   { id: 2, name: 'Jane', age: 30 },
      //   { id: 3, name: 'John', age: 35 },
      //   { id: 4, name: 'Mary', age: 40 },
      //   { id: 5, name: 'John', age: 45 },
      // ]
      //
      // const keys: (keyof Person)[] = ['id', 'name', 'age']
      // const testTodos = keys.reduce((result, attribute) => this.testList(result, attribute), people)

      const dataList: TodoTry[] = [
        {
          id: '01H0EECR22XTH4FKD8BM831JAD',
          title: '7'
        },
        {
          id: '3',
          title: '5'
        },
        {
          id: '1',
          title: '6'
        },
      ]

      const criteria = {
        where: {
          id: {
            equals: '01H0EECR22XTH4FKD8BM831JAD'
          },
          // title: {
          //   equals: 'title 1'
          // },
          // as: {
          //   equals: 'title 1'
          // }
        },
        orderBy: {
          id: 'asc',
          title: 'desc'
        },
        cursor: {
          id: '01H0EECR22XTH4FKD8BM831JAD'
          // id: null
        },
        take: 2,
        skip: null,
        distinct: ['id', 'title']
      }

      const whereKeys = Object.keys(criteria.where)
      const dataKeys = Object.keys(dataList[0])

      if (dataKeys.length !== whereKeys.length) {
        console.log('raro')
      }

      // reviso cada todo que llega

      const dataFiltered: TodoTry[] = dataList.map((data) => {

        let dataObject = {} as TodoTry

        // aplico el filtro a cada key del todo
        for (let dataKeyIndex = 0; dataKeyIndex < dataKeys.length; dataKeyIndex++) {
          const key = dataKeys[dataKeyIndex];

          const elementData = data[key]

          if (key === whereKeys[dataKeyIndex]) {

            const whereElementObject = criteria.where[key]
            const whereElementKey = Object.keys(whereElementObject)[0]
            const whereElementData = whereElementObject[whereElementKey]

            if (whereElementKey === 'equals') {
              if (elementData !== whereElementData) {
                console.log('not equals')
                break;
              }
            }
            console.log('filter')
          }

          dataObject = Object.assign(dataObject, {[key]: elementData})
        }
        return dataObject
      })

      console.log(dataList)
      console.log(dataFiltered)

      // const distinctedData : TodoTry[] = criteria.distinct.reduce((result, attribute) => this.distinctList(result, attribute), dataList)

      // const orders = [
      //   new Order(new OrderBy('title'), new OrderType(OrderTypes.ASC)),
      //   new Order(new OrderBy('id'), new OrderType(OrderTypes.ASC)),
      // ]
      // const orderedData: TodoTry[] = this.orderByCriteria(distinctedData, orders)

      // let skipCounter = 0
      // let takeCounter = 0

      // const cursorId = criteria.cursor.id;
      // const skipValue = criteria.skip;
      // const takeValue = criteria.take;

      // let canTakeCursor = false

      // let dataLimited: TodoTry[] = []
      // for (let data of orderedData) {

      //   if (cursorId !== null) {

      //     if (cursorId === data.id) {
      //       canTakeCursor = true
      //     }

      //     if (!canTakeCursor) {
      //       continue
      //     }

      //   } else if (skipValue !== null && skipCounter < skipValue) {
      //     continue
      //   }

      //   if (takeValue !== null && takeCounter >= takeValue) {
      //     break
      //   }

      //   dataLimited.push(data)
      //   takeCounter++
      // }
      return

      const result = await this.todoFinder.execute(null)
      // const todos = result.unwrap()
      // console.log(render(todos))
    } catch (e) {
      console.log(e)
    }
  }

  testList<T>(list: T[], uniqueAttribute: keyof T): T[] {
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
