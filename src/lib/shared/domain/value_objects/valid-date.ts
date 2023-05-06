import {z} from "zod";
import {ValueObject} from "./value-object";

export class ValidDate extends ValueObject<Date>{

    constructor(public readonly value: Date) {
        super(value)
        this.ensureValidDate()
    }

    private ensureValidDate(): void {
        z.date().parse(this.value)
    }
}
