import {z} from 'zod';
import {ValueObject} from './value-object';

export class CreatedAt extends ValueObject<Date> {
  constructor(public readonly value: Date) {
    super(value)
    this.ensureValidDate();
  }

  ensureValidDate(): void {
    const now = new Date();
    const oneSecondAgo = new Date(now.getTime() - 1000);
    z.date().min(oneSecondAgo).parse(this.value);
  }
}
