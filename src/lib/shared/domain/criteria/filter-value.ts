import {ValueObject} from "../value_objects";

export class FilterValue extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
