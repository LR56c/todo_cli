import {Criteria} from "../../../../shared";
import {
  TodosFindManyArgsSchema,
  TodosOrderByWithRelationInputSchema,
  TodosScalarFieldEnumSchema, TodosWhereInputSchema, TodosWhereUniqueInputSchema
} from 'prisma/generated/zod';

export class PrismaZodConverter {

  public convert(criteria: Criteria) {
    const whereTargetObject = {}

    criteria.filters.map(input => {
      return Object.assign(whereTargetObject, Object.assign({
          [input.field.value]: {
            [input.operator.value]: input.value.value
          }
        })
      )
    })

    const whereObject = !criteria.hasFilters() ? {} : {
      where: TodosWhereInputSchema.parse(whereTargetObject)
    }

    const orderListObject = !criteria.hasOrders() ? {} : {
      orderBy: criteria.orders.map(order => {
        return TodosOrderByWithRelationInputSchema.parse(
          Object.assign({[order.orderBy.value]: order.orderType.value})
        )
      })
    }

    const distinctListObject = !criteria.hasDistinct() ? {} : {
      distinct: criteria.distinct.map(distinct => {
        return TodosScalarFieldEnumSchema.parse(distinct)
      })
    }

    const cursorObject = !criteria.hasCursor() ? {} : {
      cursor: TodosWhereUniqueInputSchema.parse(criteria.cursor)
    }

    const takeObject = !criteria.hasLimit() ? {} : {
      take: criteria.limit
    }

    const skipObject = !criteria.hasOffset() ? {} : {
      skip: criteria.offset
    }

    const argsObject = Object.assign({}, whereObject, orderListObject, distinctListObject, cursorObject, takeObject, skipObject)

    return TodosFindManyArgsSchema.parse(argsObject)
  }

// select = datos que trae(-)
// where = filtros(x)(x)
// orderBy = lista orders(x)(x)
// cursor = tomar desde un id hasta take(x)(x)
// take = toma(x)(x)
// skip = salta(x)(x)
// distinct = lista distintos(x)(x)
}
