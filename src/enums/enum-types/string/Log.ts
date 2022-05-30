import { LogLevel } from "./LogLevel";

export class Log {
  constructor(readonly message: string, readonly level: LogLevel) {}
}
