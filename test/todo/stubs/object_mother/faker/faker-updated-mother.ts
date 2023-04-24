import {faker} from "@faker-js/faker";

export class FakerUpdatedMother {
    static random(created : Date): Date {
        return faker.date.future(1, created)
    }

    static randomInFuture(created : Date): Date {
        return faker.date.future(1, created)
    }
}
