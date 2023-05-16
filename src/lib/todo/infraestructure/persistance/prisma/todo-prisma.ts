import {Err, Ok, Result} from 'oxide.ts';
import {PrismaService} from 'nestjs-prisma';
import {Todo, TodoId, TodoRepository} from "../../../domain";
import {Criteria} from "../../../../shared";
import {PrismaZodConverter} from "./prisma-zod-converter";
import {Todos} from "../../../../../../prisma/generated/zod";

export class TodoPrisma implements TodoRepository {

  private prismaConverter = new PrismaZodConverter()

  constructor(private context: PrismaService) {
  }

  async save(newTodo: Todo): Promise<Result<boolean, Error>> {
    try {
      await this.context.todos.create({
        data: {
          id: newTodo.todoId.value,
          title: newTodo.todoTitle.value,
          completed: newTodo.todoCompleted.value,
          createdAt: newTodo.createdAt,
          updatedAt: newTodo.updatedAt,
        },
      });
      return Promise.resolve(Ok(true));
    } catch (e) {
      return Promise.resolve(Err(e));
    }
  }

  async delete(id: TodoId): Promise<Result<boolean, Error>> {
    try {
      await this.context.todos.delete({
        where: {
          id: id.value,
        },
      });
      return Promise.resolve(Ok(true));
    } catch (e) {
      return Promise.resolve(Err(e));
    }
  }

  async searchBy(criteria: Criteria): Promise<Result<Todo, Error>> {
    try {

      const args = this.prismaConverter.convert(criteria)
      let prismaTodos: Todos[] = []

      if (Object.keys(args).length !== 0) {
        prismaTodos = await this.context.todos.findMany(args);
      }

      const prismaTodo = prismaTodos[0]
      console.log(prismaTodo)

      const todo = Todo.from(
        {
          todoId: prismaTodo.id,
          todoTitle: prismaTodo.title,
          todoCompleted: prismaTodo.completed,
          createdAt: prismaTodo.createdAt,
          updatedAt: prismaTodo.updatedAt,
        }
      );

      return Promise.resolve(Ok(todo));
    } catch (e) {
      return Promise.resolve(Err(e));
    }
  }

  async searchAllBy(): Promise<Result<Todo[], Error>> {
    try {
      const prismaTodos = await this.context.todos.findMany();

      const todos = prismaTodos.map((prismaTodo) => {
        return Todo.from({
          todoId: prismaTodo.id,
          todoTitle: prismaTodo.title,
          todoCompleted: prismaTodo.completed,
          createdAt: prismaTodo.createdAt,
          updatedAt: prismaTodo.updatedAt
        })
      });

      return Promise.resolve(Ok(todos));
    } catch (e) {
      return Promise.resolve(Err(e));
    }
  }

  async update(newTodo: Todo): Promise<Result<boolean, Error>> {
    try {
      await this.context.todos.update({
        where: {
          id: newTodo.todoId.value,
        },
        data: {
          title: newTodo.todoTitle.value,
          completed: newTodo.todoCompleted.value,
          updatedAt: newTodo.updatedAt,
        },
      });
      return Promise.resolve(Ok(true));
    } catch (e) {
      return Promise.resolve(Err(e));
    }
  }
}
