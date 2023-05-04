import {TodoTitle} from "../../../../src";
import { FakerTitleMother } from "./faker";

export class TodoTitleMother {
    static random(): TodoTitle {
        return new TodoTitle(FakerTitleMother.random());
    }
    static invalid(): TodoTitle {
        return new TodoTitle('a');
    }
}
