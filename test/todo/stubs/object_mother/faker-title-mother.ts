import {faker} from "@faker-js/faker";

export class FakerTitleMother {
    static random(): string {
        return faker.lorem.sentences(1)
    }
}
