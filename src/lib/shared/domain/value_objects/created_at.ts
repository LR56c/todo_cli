import { z } from 'zod';

export class CreatedAt {
  constructor(public readonly value: Date) {
    this.ensureValidDate();
  }

  ensureValidDate(): void {
    const now = new Date();
    const oneSecondAgo = new Date(now.getTime() - 1000);
    z.date().min(oneSecondAgo).parse(this.value);
  }
}
