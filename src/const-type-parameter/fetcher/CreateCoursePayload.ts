import { EndpointPayload } from "./EndpointPayload";

export class CreateCoursePayload extends EndpointPayload {
  constructor(public readonly name: string, public readonly startDate: Date) {
    super();
  }
}
