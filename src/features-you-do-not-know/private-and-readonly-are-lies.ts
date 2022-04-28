// https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBAYwDYEMDOa4GEIBNhICeARsFHAN4CwAUHHGFAJYBuKMwcA4gEoCifACoBJAHJc4AXjgAiABJMZAblq16CCADs0MKAFcEMaAApGrdpyjAUuLUTiaUAW2AAuODuaaA5gEpKAL6qdHDeVsAwxr7unkw+lGr0cFYwelCacAAGACQUMAAWTGgAdLwCIuIBcLkFRcWOLlUAZlAQTth4BIRwgoRgwADKCMxg8ABC6EwIcAMA1gQRWgCEmSohQTQbQA
export class Codelyber {
  private GREETING = "Hi";

  constructor(private readonly name: string) {}

  greet(): string {
    return `${this.GREETING} ${this.name} from Codely TypeScript Basic Skeleton!`;
  }
}
