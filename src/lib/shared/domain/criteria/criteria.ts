import {Order} from './order';
import {Filter} from "./filter";

export class Criteria {
  public readonly filters: Filter[];
  public readonly orders: Order[];
  // take
  public readonly limit?: number;
  // skip
  public readonly offset?: number;
  //cursor
  public readonly cursor?: string;
  //distinct
  public readonly distinct?: string[];

  constructor(filters: Filter[], orders: Order[], limit?: number, offset?: number, cursor?: string, distinct?: string[]) {
    this.filters = filters;
    this.orders = orders;
    this.limit = limit;
    this.offset = offset;
    this.cursor = cursor;
    this.distinct = distinct;
  }

  public hasFilters(): boolean {
    return this.filters.length > 0;
  }

  public hasOrders(): boolean {
    return this.orders.length > 0;
  }
}
