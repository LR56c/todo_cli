import {FakerCreatedMother} from "./faker";

export class CreatedDateMother {
    static random(): Date {
        // return FakerCreatedMother.randomFuture();
        return new Date()
    }

    static invalid(): Date {
        return FakerCreatedMother.randomPast();
    }
}
