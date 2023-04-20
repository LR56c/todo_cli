import { z } from 'zod';
export class TodoCompleted {
  constructor(public readonly value: boolean) {
    this.ensureBool();
  }

  private ensureBool(): void {
    z.boolean().parse(this.value);
  }
}
