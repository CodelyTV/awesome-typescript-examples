import { Log } from "./Log";
import { LogLevel } from "./LogLevel";

export function printLogMessage(log: Log): void {
  switch (log.level) {
    case LogLevel.ERROR:
      console.error(log.message);
      return;
    case LogLevel.WARN:
      console.warn(log.message);
      return;
    case LogLevel.DEBUG:
      console.log(log.message);
      return;
    case LogLevel.INFO:
      console.info(log.message);
      return;
  }
}
