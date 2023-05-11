import {Todo, TodoId, TodoRepository} from "../domain";
import {Err, Ok, Result} from "oxide.ts";

export class TodoFinder {
    constructor(private todoRepository: TodoRepository) {
    }

    async execute(todoId: TodoId): Promise<Result<Todo, Error>> {
        try {
            const result = await this.todoRepository.searchById(todoId);
            return Promise.resolve(Ok(result.unwrap()))
        } catch (e) {
            return Promise.resolve(Err(e));
        }
    }
}
