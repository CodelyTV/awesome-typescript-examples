import { UseCase } from "./UseCase";
import { User } from "./User";
import { UserRepository } from "./UserRepository";

@UseCase()
export class UserSearcher {
  constructor(private readonly userRepository: UserRepository) {}

  search(): User[] {
    return this.userRepository.getAll();
  }
}
