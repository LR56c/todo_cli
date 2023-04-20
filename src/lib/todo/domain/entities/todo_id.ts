import { z } from 'zod';
export class TodoId {
  constructor(public readonly value: string) {
    this.ensureValidUUID();
  }

  private ensureValidUUID(): void {
    z.string().uuid().parse(this.value);
  }
}
