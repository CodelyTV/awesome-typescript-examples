import "reflect-metadata";

import { buildContainer } from "./container";
import { UserSearcher } from "./UserSearcher";

const container = buildContainer();

const useSearcher = container.get(UserSearcher);

console.log(useSearcher.search());
