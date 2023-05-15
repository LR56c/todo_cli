import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const SortOrderSchema = z.enum(['asc','desc']);

export const TodosScalarFieldEnumSchema = z.enum(['id','title','createdAt','updatedAt','completed']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// TODOS SCHEMA
/////////////////////////////////////////

export const TodosSchema = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  completed: z.boolean(),
})

export type Todos = z.infer<typeof TodosSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// TODOS
//------------------------------------------------------

export const TodosSelectSchema: z.ZodType<Prisma.TodosSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  completed: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const TodosWhereInputSchema: z.ZodType<Prisma.TodosWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TodosWhereInputSchema),z.lazy(() => TodosWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TodosWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TodosWhereInputSchema),z.lazy(() => TodosWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  completed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export const TodosOrderByWithRelationInputSchema: z.ZodType<Prisma.TodosOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  completed: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TodosWhereUniqueInputSchema: z.ZodType<Prisma.TodosWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const TodosOrderByWithAggregationInputSchema: z.ZodType<Prisma.TodosOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  completed: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TodosCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TodosMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TodosMinOrderByAggregateInputSchema).optional()
}).strict();

export const TodosScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TodosScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TodosScalarWhereWithAggregatesInputSchema),z.lazy(() => TodosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TodosScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TodosScalarWhereWithAggregatesInputSchema),z.lazy(() => TodosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  completed: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

// @ts-ignore
export const TodosCreateInputSchema: z.ZodType<Prisma.TodosCreateInput> = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completed: z.boolean().optional()
}).strict();

// @ts-ignore
export const TodosUncheckedCreateInputSchema: z.ZodType<Prisma.TodosUncheckedCreateInput> = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completed: z.boolean().optional()
}).strict();

export const TodosUpdateInputSchema: z.ZodType<Prisma.TodosUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  completed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TodosUncheckedUpdateInputSchema: z.ZodType<Prisma.TodosUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  completed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

// @ts-ignore
export const TodosCreateManyInputSchema: z.ZodType<Prisma.TodosCreateManyInput> = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  completed: z.boolean().optional()
}).strict();

export const TodosUpdateManyMutationInputSchema: z.ZodType<Prisma.TodosUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  completed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TodosUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TodosUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  completed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const TodosCountOrderByAggregateInputSchema: z.ZodType<Prisma.TodosCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  completed: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TodosMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TodosMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  completed: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TodosMinOrderByAggregateInputSchema: z.ZodType<Prisma.TodosMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  completed: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const TodosFindFirstArgsSchema: z.ZodType<Prisma.TodosFindFirstArgs> = z.object({
  select: TodosSelectSchema.optional(),
  where: TodosWhereInputSchema.optional(),
  orderBy: z.union([ TodosOrderByWithRelationInputSchema.array(),TodosOrderByWithRelationInputSchema ]).optional(),
  cursor: TodosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TodosScalarFieldEnumSchema.array().optional(),
}).strict()

export const TodosFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TodosFindFirstOrThrowArgs> = z.object({
  select: TodosSelectSchema.optional(),
  where: TodosWhereInputSchema.optional(),
  orderBy: z.union([ TodosOrderByWithRelationInputSchema.array(),TodosOrderByWithRelationInputSchema ]).optional(),
  cursor: TodosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TodosScalarFieldEnumSchema.array().optional(),
}).strict()

export const TodosFindManyArgsSchema: z.ZodType<Prisma.TodosFindManyArgs> = z.object({
  select: TodosSelectSchema.optional(),
  where: TodosWhereInputSchema.optional(),
  orderBy: z.union([ TodosOrderByWithRelationInputSchema.array(),TodosOrderByWithRelationInputSchema ]).optional(),
  cursor: TodosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: TodosScalarFieldEnumSchema.array().optional(),
}).strict()

export const TodosAggregateArgsSchema: z.ZodType<Prisma.TodosAggregateArgs> = z.object({
  where: TodosWhereInputSchema.optional(),
  orderBy: z.union([ TodosOrderByWithRelationInputSchema.array(),TodosOrderByWithRelationInputSchema ]).optional(),
  cursor: TodosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

// @ts-ignore
export const TodosGroupByArgsSchema: z.ZodType<Prisma.TodosGroupByArgs> = z.object({
  where: TodosWhereInputSchema.optional(),
  orderBy: z.union([ TodosOrderByWithAggregationInputSchema.array(),TodosOrderByWithAggregationInputSchema ]).optional(),
  by: TodosScalarFieldEnumSchema.array(),
  having: TodosScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

// @ts-ignore
export const TodosFindUniqueArgsSchema: z.ZodType<Prisma.TodosFindUniqueArgs> = z.object({
  select: TodosSelectSchema.optional(),
  where: TodosWhereUniqueInputSchema,
}).strict()

// @ts-ignore
export const TodosFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TodosFindUniqueOrThrowArgs> = z.object({
  select: TodosSelectSchema.optional(),
  where: TodosWhereUniqueInputSchema,
}).strict()

// @ts-ignore
export const TodosCreateArgsSchema: z.ZodType<Prisma.TodosCreateArgs> = z.object({
  select: TodosSelectSchema.optional(),
  data: z.union([ TodosCreateInputSchema,TodosUncheckedCreateInputSchema ]),
}).strict()

// @ts-ignore
export const TodosUpsertArgsSchema: z.ZodType<Prisma.TodosUpsertArgs> = z.object({
  select: TodosSelectSchema.optional(),
  where: TodosWhereUniqueInputSchema,
  create: z.union([ TodosCreateInputSchema,TodosUncheckedCreateInputSchema ]),
  update: z.union([ TodosUpdateInputSchema,TodosUncheckedUpdateInputSchema ]),
}).strict()

// @ts-ignore
export const TodosCreateManyArgsSchema: z.ZodType<Prisma.TodosCreateManyArgs> = z.object({
  data: z.union([ TodosCreateManyInputSchema,TodosCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

// @ts-ignore
export const TodosDeleteArgsSchema: z.ZodType<Prisma.TodosDeleteArgs> = z.object({
  select: TodosSelectSchema.optional(),
  where: TodosWhereUniqueInputSchema,
}).strict()

// @ts-ignore
export const TodosUpdateArgsSchema: z.ZodType<Prisma.TodosUpdateArgs> = z.object({
  select: TodosSelectSchema.optional(),
  data: z.union([ TodosUpdateInputSchema,TodosUncheckedUpdateInputSchema ]),
  where: TodosWhereUniqueInputSchema,
}).strict()

// @ts-ignore
export const TodosUpdateManyArgsSchema: z.ZodType<Prisma.TodosUpdateManyArgs> = z.object({
  data: z.union([ TodosUpdateManyMutationInputSchema,TodosUncheckedUpdateManyInputSchema ]),
  where: TodosWhereInputSchema.optional(),
}).strict()

export const TodosDeleteManyArgsSchema: z.ZodType<Prisma.TodosDeleteManyArgs> = z.object({
  where: TodosWhereInputSchema.optional(),
}).strict()
