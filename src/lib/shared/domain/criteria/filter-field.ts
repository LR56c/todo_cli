import {ValueObject} from "../value_objects";

export class FilterField extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
