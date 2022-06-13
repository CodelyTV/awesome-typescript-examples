import { Action } from "./Action";

export interface LoginAction extends Action {
  type: "login";
  params: { user: string };
}
