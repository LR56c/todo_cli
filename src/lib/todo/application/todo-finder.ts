import {Todo, TodoRepository} from "../domain";
import {Err, Ok, Result} from "oxide.ts";
import {Criteria} from "../../shared";

export class TodoFinder {
    constructor(private todoRepository: TodoRepository) {
    }

    async execute(criteria : Criteria): Promise<Result<Todo, Error>> {
        try {
            const result = await this.todoRepository.searchById(criteria);
            return Promise.resolve(Ok(result.unwrap()))
        } catch (e) {
            return Promise.resolve(Err(e));
        }
    }
}
