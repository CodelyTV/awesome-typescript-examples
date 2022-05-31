import { Log } from "./Log";
import { LogLevelObject } from "./LogLevelObject";

export function printLogMessage(log: Log): void {
  switch (log.level) {
    case LogLevelObject.ERROR:
      console.error(log.message);
      return;
    case LogLevelObject.WARN:
      console.warn(log.message);
      return;
    case LogLevelObject.DEBUG:
      console.log(log.message);
      return;
    case LogLevelObject.INFO:
      console.info(log.message);
      return;
  }
}
