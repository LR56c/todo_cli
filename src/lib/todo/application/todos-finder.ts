import {Todo, TodoRepository} from "../domain";
import {Err, Ok, Result} from "oxide.ts";

export class TodosFinder {
    constructor(private todoRepository: TodoRepository) {
    }

    async execute(): Promise<Result<Todo[], Error>> {
        try {
            const result = await this.todoRepository.searchAll();
            return Promise.resolve(Ok(result.unwrap()));
        } catch (e) {
            return Promise.resolve(Err(e));
        }
    }
}
