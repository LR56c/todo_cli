import {FakerUpdatedMother} from "./faker";

export class UpdatedDateMother {
    static random(created : Date): Date {
        return FakerUpdatedMother.randomInFuture(created);
    }
}
