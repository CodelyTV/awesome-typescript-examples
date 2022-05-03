import { AggregateRoot } from "./AggregateRoot";

export class Course implements AggregateRoot {
  constructor(readonly id: string, readonly url: string) {}
}
