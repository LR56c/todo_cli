import {TodoId} from "../../../../src";
import {UuidMother} from "../../../shared";

export class TodoIdMother{
    static random(): TodoId {
        return new TodoId(UuidMother.random());
    }

    static invalid(): TodoId {
        return new TodoId('invalid');
    }
}

