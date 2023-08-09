import { EndpointPayload } from "./EndpointPayload";

export class CreateCoursePayload extends EndpointPayload {
  constructor(public readonly title: string, public readonly startDate: Date) {
    super();
  }
}
