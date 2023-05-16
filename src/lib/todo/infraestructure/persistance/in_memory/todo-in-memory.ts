import {Err, Ok, Result} from 'oxide.ts';
import {Todo, TodoId, TodoRepository} from "../../../domain";
import {Criteria} from "../../../../shared";
import {InMemoryConverter} from "./in-memory-converter";

export class TodoInMemory implements TodoRepository {

    private inMemoryConverter = new InMemoryConverter();

    constructor(private context: Todo[] = []) {
    }

    async save(newTodo: Todo): Promise<Result<boolean, Error>> {
        if (this.context.find((todo) => todo.todoId.value === newTodo.todoId.value)) {
            return Promise.resolve(Err(new Error('Todo already exists')));
        }

        this.context.push(newTodo);
        return Promise.resolve(Ok(true));
    }

    async delete(id: TodoId): Promise<Result<boolean, Error>> {
        try {
            this.context = this.context.filter((todo) => todo.todoId.value !== id.value);
            return Promise.resolve(Ok(true));
        } catch (e) {
            return Promise.resolve(Err(e));
        }
    }

    async searchBy(criteria: Criteria): Promise<Result<Todo, Error>> {
        try {
            // const todo = this.context.find((todo) => todo.todoId.value === id.value);
            const todo = null
            return Promise.resolve(Ok(todo));
        } catch (e) {
            return Promise.resolve(Err(e));
        }
    }

    async searchAllBy(criteria: Criteria): Promise<Result<Todo[], Error>> {
        try {
            return Promise.resolve(Ok(this.context));
        } catch (e) {
            return Promise.resolve(Err(e));
        }
    }

    async update(newTodo: Todo): Promise<Result<boolean, Error>> {
        try {
            this.context = this.context.map((todo) => {
                return todo.todoId.value === newTodo.todoId.value ? newTodo : todo;
            });
            return Promise.resolve(Ok(true));
        } catch (e) {
            return Promise.resolve(Err(e));
        }
    }
}