import { FilterField } from './filter-field';
import { FilterOperator } from './filter-operator';
import { FilterValue } from './filter-value';

export class Filter {
  readonly field: FilterField;
  readonly operator: FilterOperator;
  readonly value: FilterValue;

  constructor(field: FilterField, operator: FilterOperator, value: FilterValue) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }

  static from(values: Map<string, string>): Filter {
    const field = values.get('field');
    const operator = values.get('operator');
    const value = values.get('value');

    if (!field || !operator || !value) {
      throw new Error(`The filter is invalid`);
    }

    // return new Filter(new FilterField(field), FilterOperator.from(operator), new FilterValue(value));
    return new Filter(new FilterField(field), new FilterOperator(operator), new FilterValue(value));
  }
}
