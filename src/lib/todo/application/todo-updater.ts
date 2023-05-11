import {Todo, TodoRepository} from "../domain";
import {Err, Ok, Result} from "oxide.ts";

export class TodoUpdater {
  constructor(private todoRepository: TodoRepository) {
  }
  async execute(todo: Todo):  Promise<Result<boolean, Error>>{
    try {
      const result = await this.todoRepository.update(todo);
      return Promise.resolve(Ok(result.unwrap()));
    }
    catch (e) {
      return Promise.resolve(Err(e));
    }
  }
}
