import { EndpointPayload } from "./EndpointPayload";

export class CreateUserPayload extends EndpointPayload {
  constructor(public readonly name: string) {
    super();
  }
}
