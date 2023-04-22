import {v4 as uuid} from "uuid";

export class UuidMother {
    static random(): string {
        return uuid();
    }
}
