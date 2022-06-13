import { Primitives } from "../../features-you-do-not-know/useful-utility-types/shared/domain/Primitives";
import { Email } from "./Email";
import { Name } from "./Name";
import { NoEditorUserError } from "./NoEditorUserError";
import { UserType } from "./UserType";

export class User {
  constructor(
    readonly name: Name,
    readonly email: Email,
    readonly type: UserType
  ) {}

  createCourse() {
    if (!this.type.isEditor()) {
      throw new NoEditorUserError(this.name.value);
    }
    // Create course logic
  }

  static fromPrimitives(params: Primitives<User>): User {
    return new User(
      new Name(params.name),
      new Email(params.email),
      UserType.fromValue(params.type)
    );
  }
}
