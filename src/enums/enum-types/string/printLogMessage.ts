import { Log } from "./Log";
import { LogLevel } from "./LogLevel";

export function printLogMessage(log: Log): void {
  switch (log.level) {
    case LogLevel.ERROR:
      console.error(log.message);
    case LogLevel.WARN:
      console.warn(log.message);
    case LogLevel.DEBUG:
      console.log(log.message);
    case LogLevel.INFO:
      console.info(log.message);
  }
}
