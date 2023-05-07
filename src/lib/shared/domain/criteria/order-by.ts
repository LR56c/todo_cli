import {ValueObject} from "../value_objects";

export class OrderBy extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
