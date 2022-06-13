import { LoginAction } from "./LoginAction";

type DispatchParams<T extends string> = T extends "login"
  ? Pick<LoginAction, "params">["params"]
  : undefined;

export function dispatchConditionalByType<T extends string>(
  type: T,
  params: DispatchParams<T>
) {
  console.log(type, params);
}

// Usage examples
dispatchConditionalByType("login", { user: "Isma" });
dispatchConditionalByType("logout", undefined);
