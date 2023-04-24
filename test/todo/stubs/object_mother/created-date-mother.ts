import {FakerCreatedMother} from "./faker";

export class CreatedDateMother {
    static random(): Date {
        return FakerCreatedMother.randomInFuture();
    }
}
