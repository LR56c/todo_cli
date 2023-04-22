import {Todo} from "../../../../src";
import {
  TodoIdMother,
  TodoCompletedMother,
  CreatedDateMother,
  UpdatedDateMother,
  TodoTitleMother
} from "../object_mother";

export class TodoMother {
  static random(): Todo {
    return Todo.from(
      {
        todoId: TodoIdMother.random().value,
        todoTitle: TodoTitleMother.random().value,
        todoCompleted: TodoCompletedMother.random().value,
        createdAt: CreatedDateMother.random(),
        updatedAt: UpdatedDateMother.random(),
      }
    );
  }
}

