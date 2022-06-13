import { InvalidEmailError } from "./InvalidEmailError";
import { NoEditorUserError } from "./NoEditorUserError";
import { User } from "./User";
import { UserTypes } from "./UserType";

try {
  const user = User.fromPrimitives({
    name: "Javi",
    email: "javimail.com",
    type: UserTypes.Standard,
  });

  user.createCourse();
} catch (error) {
  if (error instanceof InvalidEmailError) {
    console.warn(error.message);
  } else if (error instanceof NoEditorUserError) {
    console.info(error.message);
  }
}
