import { ulid } from "ulidx"

export class UuidMother {
    static random(): string {
        // return uuid();
        return ulid();
    }
}
