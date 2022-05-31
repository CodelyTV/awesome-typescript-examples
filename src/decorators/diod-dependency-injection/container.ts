import { ContainerBuilder } from "diod";

import { InMemoryUserRepository } from "./InMemoryUserRepository";
import { registeredUseCases } from "./RegisterUseCase";
import { UserRepository } from "./UserRepository";

const builder = new ContainerBuilder();

export const buildContainer = () => {
  builder.register(UserRepository).use(InMemoryUserRepository);

  registeredUseCases.forEach((useCase) => {
    builder.registerAndUse(useCase);
  });

  return builder.build();
};
