export class VideoStep {
  readonly type = "video";
  constructor(readonly name: string, readonly durationInMillis: number) {}
}
