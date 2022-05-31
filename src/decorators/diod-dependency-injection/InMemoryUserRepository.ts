import { Service } from "diod";

import { User } from "./User";
import { UserRepository } from "./UserRepository";

@Service()
export class InMemoryUserRepository implements UserRepository {
  getAll(): User[] {
    return [
      new User("d0b801d0-59bb-4710-917f-3a6548b3fb29", "🧔🏻 Javi"),
      new User("f2b29adf-8b19-408f-9205-1a8bf7a51deb", "🍺 Isma"),
    ];
  }
}
