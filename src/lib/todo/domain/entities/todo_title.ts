import { z } from 'zod';
export class TodoTitle {
  constructor(public readonly value: string) {
    this.ensureValidTitle();
  }

  private ensureValidTitle(): void {
    z.string().min(5).parse(this.value);
  }
}
