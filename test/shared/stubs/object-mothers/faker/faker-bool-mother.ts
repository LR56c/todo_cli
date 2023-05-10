import {faker} from "@faker-js/faker";

export class FakerBoolMother {
    static random(): boolean {
        return faker.datatype.boolean()
    }
}
