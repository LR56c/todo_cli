import { Result, Err, Ok } from 'oxide.ts';
import { Todo, TodoCompleted, TodoId, TodoRepository, TodoTitle } from "../domain";
import { CreatedAt, UpdatedAt } from "../../shared";
export class TodoCreator {
  constructor(private todoRepository: TodoRepository) {}

  async execute(todoId: TodoId,
                todoTitle: TodoTitle,
                todoCompleted: TodoCompleted,
                createdAt: CreatedAt,
                updatedAt: UpdatedAt): Promise<Result<boolean, Error>> {
    try {
      const result = await this.todoRepository.save(
        Todo.create(todoId, todoTitle, todoCompleted, createdAt, updatedAt)
      );
      return Promise.resolve(Ok(result.unwrap()));
    }
    catch (e) {
      return Promise.resolve(Err(e));
    }
  }
}
