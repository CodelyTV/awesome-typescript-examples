import { LogLevel } from "./LogLevelObject";

export class Log {
  constructor(readonly message: string, readonly level: LogLevel) {}
}
