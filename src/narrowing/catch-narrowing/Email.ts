import { InvalidEmailError } from "./InvalidEmailError";
import { StringValueObject } from "./StringValueObject";

export class Email extends StringValueObject {
  constructor(readonly value: string) {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      throw new InvalidEmailError(value);
    }
    super(value);
  }
}
