import { RegisterUseCase } from "./RegisterUseCase";
import { User } from "./User";
import { UserRepository } from "./UserRepository";

@RegisterUseCase()
export class UserSearcher {
  constructor(private readonly userRepository: UserRepository) {}

  search(): User[] {
    return this.userRepository.getAll();
  }
}
