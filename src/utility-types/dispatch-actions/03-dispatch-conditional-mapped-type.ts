import { LoginAction } from "./LoginAction";
import { LogoutAction } from "./LogoutAction";

type MappedActions = {
  login: LoginAction;
  logout: LogoutAction;
};

type DispatchParams<T extends keyof MappedActions> = MappedActions[T] extends {
  params: unknown;
}
  ? Pick<MappedActions[T], "params">["params"]
  : undefined;

export function dispatchActionConditionalWithMappedType<
  T extends keyof MappedActions
>(type: T, params: DispatchParams<T>) {
  console.log(type, params);
}

// Usage examples
dispatchActionConditionalWithMappedType("login", { user: "Isma" });
dispatchActionConditionalWithMappedType("logout", undefined);
