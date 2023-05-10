import { z } from 'zod';
import {ValueObject} from "./value-object";

export class UpdatedAt extends ValueObject<Date>{
  constructor(public readonly value: Date, public readonly createdAt: Date) {
    super(value);
    this.ensureValidDate();
  }

  private ensureValidDate(): void {
    z.date().min(this.createdAt).parse(this.value);
  }
}
