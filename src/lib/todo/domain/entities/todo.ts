import { TodoId } from './todo_id';
import { TodoTitle } from './todo_title';
import { TodoCompleted } from './todo_completed';
import { z } from "zod";

export class Todo {
  private constructor(
    public readonly todoId: TodoId,
    public readonly todoTitle: TodoTitle,
    public readonly todoCompleted: TodoCompleted,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}

  public static create(
    todoId: TodoId,
    todoTitle: TodoTitle,
    todoCompleted: TodoCompleted,
    createdAt: Date,
    updatedAt: Date,
  ): Todo {
    z.date().parse(createdAt);
    z.date().parse(updatedAt);
    return new Todo(todoId, todoTitle, todoCompleted, createdAt, updatedAt);
  }
}
