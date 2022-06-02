import "reflect-metadata";

import { buildContainer } from "./container";
import { UserSearcher } from "./UserSearcher";

const container = buildContainer();

const userSearcher = container.get(UserSearcher);

console.log(userSearcher.search());
