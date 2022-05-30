import { AccessLevel } from "./AccessLevel";

export class User {
  constructor(readonly name: string, readonly accessLevel: AccessLevel) {}

  canEditVideos(): boolean {
    return this.accessLevel >= AccessLevel.Editor;
  }
}
