import { Err, Ok, Result } from 'oxide.ts';
import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { Todo, TodoCompleted, TodoId, TodoRepository, TodoTitle } from "../../../lib";

// better duplicate code than bad abstraction
// Create other TodoService for other ORM
@Injectable()
export class TodoService implements TodoRepository {
  constructor(private context: PrismaService) {
  }

  async createTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
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

  async deleteTodo(id: TodoId): Promise<Result<boolean, Error>> {
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

  async getTodoById(id: TodoId): Promise<Result<Todo, Error>> {
    try {
      const prismaTodo = await this.context.todos.findUnique({
        where: {
          id: id.value,
        },
      });

      const todo = Todo.create(
        new TodoId(prismaTodo.id),
        new TodoTitle(prismaTodo.title),
        new TodoCompleted(prismaTodo.completed),
        prismaTodo.createdAt,
        prismaTodo.updatedAt,
      );

      return Promise.resolve(Ok(todo));
    } catch (e) {
      return Promise.resolve(Err(e));
    }
  }

  async getTodos(): Promise<Result<Todo[], Error>> {
    try {
      const prismaTodos = await this.context.todos.findMany();

      const todos = prismaTodos.map((prismaTodo) => {
        return Todo.create(
          new TodoId(prismaTodo.id),
          new TodoTitle(prismaTodo.title),
          new TodoCompleted(prismaTodo.completed),
          prismaTodo.createdAt,
          prismaTodo.updatedAt,
        );
      });

      return Promise.resolve(Ok(todos));
    } catch (e) {
      return Promise.resolve(Err(e));
    }
  }

  async updateTodo(newTodo: Todo): Promise<Result<boolean, Error>> {
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
