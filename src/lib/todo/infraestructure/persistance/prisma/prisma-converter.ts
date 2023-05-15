import {Criteria} from "../../../../shared";
import {
  TodosFindManyArgsSchema,
  TodosOrderByWithRelationInputSchema,
  TodosScalarFieldEnumSchema, TodosWhereInputSchema, TodosWhereUniqueInputSchema
} from 'prisma/generated/zod';
import {z} from "zod";

export type TodosFindManyArgs = z.infer<typeof TodosFindManyArgsSchema>;

export class PrismaConverter {

  public convert(criteria: Criteria) {
    const take = criteria.limit
    const skip = criteria.offset

    const orderList = criteria.orders.map(order => {
      return TodosOrderByWithRelationInputSchema.parse(
        Object.assign({[order.orderBy.value]: order.orderType.value})
      )
    })

    const distinctList = criteria.distinct.map(distinct => {
      return TodosScalarFieldEnumSchema.parse(distinct)
    })

    const whereList = criteria.filters.map(filter => {})

    const w = TodosWhereInputSchema.parse("sdf")

    const args: TodosFindManyArgs = {
      orderBy: [...orderList],
      cursor: TodosWhereUniqueInputSchema.parse(criteria.cursor),
      take,
      skip,
      distinct: [...distinctList],
    }
    return TodosFindManyArgsSchema.parse(args)
    // return {
    //   select: 0,
    //   where: {
    //     id: criteria.filters.filters[0].value
    //   },
    //   orderBy: 0,
    //   cursor: 0,
    //   take: 0,
    //   skip: 0,
    //   distinct: 0,
    // }
  }

// select = datos que trae
// where = filtros(x)
// orderBy = lista orders(x)
// cursor = tomar desde un id hasta take(x)
// take = toma(x)
// skip = salta(x)
// distinct = lista distintos
}
