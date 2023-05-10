import {FakerUpdatedMother} from "./faker";

export class UpdatedDateMother {
    static random(created : Date): Date {
        // return FakerUpdatedMother.randomFuture(created);
        return new Date()
    }

    static invalid(created : Date): Date {
        return FakerUpdatedMother.randomFuture(created);
    }
}
