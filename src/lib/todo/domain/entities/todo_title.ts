import { z } from 'zod';
import {ValueObject} from "../../../shared";
export class TodoTitle extends ValueObject<string>{
  constructor(public readonly value: string) {
    super(value);
    this.ensureValidTitle();
  }

  private ensureValidTitle(): void {
    z.string().min(5).parse(this.value);
  }
}
