import { User } from "./User";

export abstract class UserRepository {
  abstract getAll(): User[];
}
