import { Log } from "./Log";
import { LogLevelObject } from "./LogLevelObject";
import { printLogMessage } from "./printLogMessage";

const infoLog = new Log("Message sent succesfully", LogLevelObject.INFO);

printLogMessage(infoLog);
