import {faker} from "@faker-js/faker";

export class FakerCreatedMother {
    static random(): Date {
        return faker.date.between(faker.date.past(10), faker.date.future(10))
    }

    static randomFuture(): Date {
        return faker.date.future(1)
    }

    static randomPast(): Date {
        return faker.date.past(1)
    }
}
