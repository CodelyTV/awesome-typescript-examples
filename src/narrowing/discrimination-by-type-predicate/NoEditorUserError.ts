export class NoEditorUserError extends Error {
  constructor(user: string) {
    super(`The user ${user} is not an editor`);
  }
}
