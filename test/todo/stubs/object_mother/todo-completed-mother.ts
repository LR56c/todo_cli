import {TodoCompleted} from "../../../../src";
import {FakerBoolMother} from "./faker-bool-mother";

export class TodoCompletedMother {
    static random(): TodoCompleted {
        return new TodoCompleted(FakerBoolMother.random());
    }
}
