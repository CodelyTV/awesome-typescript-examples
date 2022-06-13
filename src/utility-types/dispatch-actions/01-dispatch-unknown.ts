export function dispatchUnknown(type: string, params: unknown) {
  console.log(type, params);
}

// Usage examples
dispatchUnknown("login", { user: "Isma" });
dispatchUnknown("logout", { user: "Isma" });
