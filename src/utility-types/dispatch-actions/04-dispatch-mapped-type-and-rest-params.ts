import { Action } from "./Action";
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

type DispathActionParams<T extends keyof MappedActions> =
  MappedActions[T] extends Required<Pick<Action, "params">>
    ? [DispatchParams<T>]
    : [];

export function dispatchActionConditionalWithMappedTypeAndRestParameter<
  T extends keyof MappedActions
>(type: T, ...params: DispathActionParams<T>) {
  console.log(type, params);
}

// Usage examples
dispatchActionConditionalWithMappedTypeAndRestParameter("login", {
  user: "Isma",
});
dispatchActionConditionalWithMappedTypeAndRestParameter("logout");
