import {z} from "zod";

export class ValidDate {

    constructor(public readonly value: Date) {
        this.ensureValidDate()
    }

    ensureValidDate(): void {
        z.date().parse(this.value)
    }
}
