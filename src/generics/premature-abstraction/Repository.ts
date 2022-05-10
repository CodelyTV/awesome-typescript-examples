import { AggregateRoot } from "./AggregateRoot";

export interface Repository<T extends AggregateRoot> {
  search(item: T): T | null;

  save(item: T): void;

  delete(item: T): void;

  update(item: T): void;
}
