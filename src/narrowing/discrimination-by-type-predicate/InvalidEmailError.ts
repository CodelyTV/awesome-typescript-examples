export class InvalidEmailError extends Error {
  constructor(email: string) {
    super(`${email} is an invalid email`);
  }
}
