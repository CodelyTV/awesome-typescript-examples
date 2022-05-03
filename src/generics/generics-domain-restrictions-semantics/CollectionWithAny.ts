/**
 * 🍼 First stage:
 *
 * 😇 We are young and innocent about the potential we are missing while not using types
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
export class CollectionWithAny {
  constructor(private readonly items: any[]) {}

  find(predicate: (item: any) => boolean): any {
    return this.items.find(predicate);
  }
}
