import { Result, Err, Ok } from 'oxide.ts';
import { Todo, TodoCompleted, TodoId, TodoRepository, TodoTitle } from "../domain";
import { CreatedAt, UpdatedAt } from "../../shared";
export class CreateTodo {
  constructor(private todoRepository: TodoRepository) {}

  async execute(todoId: TodoId,
                todoTitle: TodoTitle,
                todoCompleted: TodoCompleted,
                createdAt: CreatedAt,
                updatedAt: UpdatedAt): Promise<Result<boolean, Error>> {
    try {
      const result = await this.todoRepository.createTodo(
        Todo.create(todoId, todoTitle, todoCompleted, createdAt.value, updatedAt.value)
      );
      return Promise.resolve(Ok(result.unwrap()));
    }
    catch (e) {
      return Promise.resolve(Err(e));
    }
  }
}
