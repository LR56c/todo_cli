import {TodoId, TodoRepository} from "../domain";
import {Err, Ok, Result} from "oxide.ts";

export class TodoDelete {
  constructor(private todoRepository: TodoRepository) {}
  async execute(todoId: TodoId):  Promise<Result<boolean, Error>>{
    try {
      const result = await this.todoRepository.delete(todoId);
      return Promise.resolve(Ok(result.unwrap()));
    }
    catch (e) {
      return Promise.resolve(Err(e));
    }
  }

}
