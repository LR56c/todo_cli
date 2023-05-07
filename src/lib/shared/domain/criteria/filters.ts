import { Filter } from './filter';

export class Filters {
  readonly filters: Filter[];

  constructor(filters: Filter[]) {
    this.filters = filters;
  }

  static from(filters: Array<Map<string, string>>): Filters {
    return new Filters(filters.map(Filter.from));
  }

  static none(): Filters {
    return new Filters([]);
  }
}
