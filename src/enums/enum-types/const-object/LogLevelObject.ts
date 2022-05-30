export const LogLevelObject = {
  WARN: "WARN",
  INFO: "INFO",
  ERROR: "ERROR",
  DEBUG: "DEBUG",
} as const;

export type LogLevel = keyof typeof LogLevelObject;
