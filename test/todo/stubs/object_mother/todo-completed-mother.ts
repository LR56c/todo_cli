import {TodoCompleted} from "../../../../src";
import {FakerBoolMother} from "./faker";

export class TodoCompletedMother {
    static random(): TodoCompleted {
        return new TodoCompleted(FakerBoolMother.random());
    }

    static invalid(): TodoCompleted {
        return new TodoCompleted(null);
    }
}
