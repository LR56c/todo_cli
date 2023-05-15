import { z } from 'zod'
import {ValueObject} from "../../../shared"
export class TodoId extends ValueObject<string>{
  constructor(public readonly value: string) {
    super(value)
    this.ensureValidID()
  }

  private ensureValidID(): void {
    // z.string().uuid().parse(this.value)
    z.string().ulid().parse(this.value)
  }
}
