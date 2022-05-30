import { Log } from "./Log";
import { LogLevel } from "./LogLevel";
import { printLogMessage } from "./printLogMessage";

const infoLog = new Log("Message sent succesfully", LogLevel.INFO);

printLogMessage(infoLog);
