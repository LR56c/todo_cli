import { z } from 'zod';
import {ValueObject} from "../../../shared";
export class TodoCompleted extends ValueObject<boolean>{
  constructor(public readonly value: boolean) {
    super(value);
    this.ensureBool();
  }

  private ensureBool(): void {
    z.boolean().parse(this.value);
  }
}
