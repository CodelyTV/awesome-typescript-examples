import { EnumValueObject } from "./EnumValueObject";

export enum UserTypes {
  Standard = "Standard",
  Editor = "Editor",
}

export class UserType extends EnumValueObject<UserTypes> {
  constructor(value: UserTypes) {
    super(value, Object.values(UserTypes));
  }

  static fromValue(value: keyof typeof UserTypes): UserType {
    return new UserType(UserTypes[value]);
  }

  isEditor(): boolean {
    return this.value === UserTypes.Editor;
  }

  protected throwErrorForInvalidValue(value: UserTypes): void {
    throw new Error(`The user type ${value} is invalid`);
  }
}
