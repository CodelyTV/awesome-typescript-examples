/**
 * ✨ Second stage wins:
 *
 * 🧱 Now we know which type we are returning
 * 💪 Now we are explicit about potentially returning `undefined`
 */
export class CollectionWithGenerics<T> {
  constructor(private readonly items: T[]) {}

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }
}
