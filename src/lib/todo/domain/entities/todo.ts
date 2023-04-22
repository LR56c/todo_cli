import {TodoId} from './todo_id'
import {TodoTitle} from './todo_title'
import {TodoCompleted} from './todo_completed'
import {z} from "zod"
import {CreatedAt, UpdatedAt} from "../../../shared"
import {ValidDate} from "../../../shared/domain/value_objects/valid-date";

export class Todo {
    private constructor(
        public readonly todoId: TodoId,
        public readonly todoTitle: TodoTitle,
        public readonly todoCompleted: TodoCompleted,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {
    }

    public static create(
        todoId: TodoId,
        todoTitle: TodoTitle,
        todoCompleted: TodoCompleted,
        createdAt: CreatedAt,
        updatedAt: UpdatedAt,
    ): Todo {

        return new Todo(todoId, todoTitle, todoCompleted, createdAt.value, updatedAt.value)
    }

    public static from(plain: {
        todoId: string,
        todoTitle: string,
        todoCompleted: boolean,
        createdAt: Date,
        updatedAt: Date,
    }): Todo {
        return new Todo(
            new TodoId(plain.todoId),
            new TodoTitle(plain.todoTitle),
            new TodoCompleted(plain.todoCompleted),
            new ValidDate(plain.createdAt).value,
            new ValidDate(plain.updatedAt).value
        )
    }
}
