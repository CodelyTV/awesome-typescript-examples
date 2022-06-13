import { InvalidEmailError } from "./InvalidEmailError";
import { StringValueObject } from "./StringValueObject";

export class Email extends StringValueObject {
  private readonly nonRepresentativeEmailRegEx =
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  constructor(readonly value: string) {
    super(value);

    if (!this.nonRepresentativeEmailRegEx.test(value)) {
      throw new InvalidEmailError(value);
    }
  }
}
