import {TodoTitle} from "../../../../src";
import {FakerTitleMother} from "./faker-title-mother";

export class TodoTitleMother {
    static random(): TodoTitle {
        return new TodoTitle(FakerTitleMother.random());
    }
}
