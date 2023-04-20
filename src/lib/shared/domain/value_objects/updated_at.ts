import { z } from 'zod';

export class UpdatedAt {
  constructor(public readonly value: Date, public readonly createdAt: Date) {
    this.ensureValidDate();
  }

  ensureValidDate(): void {
    z.date().min(this.createdAt).parse(this.value);
  }
}
