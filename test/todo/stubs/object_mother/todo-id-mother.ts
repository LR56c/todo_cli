import {TodoId} from "../../../../src";
import {UuidMother} from "./uuid-mother";

export class TodoIdMother{
    static random(): TodoId {
        return new TodoId(UuidMother.random());
    }
}

