/* eslint-disable @typescript-eslint/ban-ts-comment */
type Setting = { value: string } | Settings;
type Settings = { [key: string]: Setting };

// Example 1
// With Settings as colon annotation we need to narrow the types before usage
const settings: Settings = {
  environment: {
    value: "dev",
  },
  database: {
    host: {
      value: "localhost",
    },
  },
};

// Necesitamos narrowing de propiedades
if ("host" in settings.database) {
  settings.database.host.value;
}

// @ts-expect-error
settings.database.host.value;
//                       ^?

// Example 2
// With as const we avoid narrowing before usage but the IDE don't autocomplete definition
const settings2 = {
  environment: {
    value: "dev",
  },
  database: {
    host: {
      value: "localhost",
    },
  },
} as const;

settings2.database.host.value;

// Example 3
// With satisfies we avoid narrowing and earn autocompletion in definition
const settings3 = {
  environment: {
    value: "dev",
  },
  database: {
    host: {
      value: "localhost",
    },
  },
} satisfies Settings;

settings3.database.host.value;
//                       ^?

// Example 4
// Finally, we can combine "as const" and "satisfies" to get all the advantages of both keywords
const settings4 = {
  environment: {
    value: "dev",
  },
  database: {
    host: {
      value: "localhost",
    },
  },
} as const satisfies Settings;

settings4.database.host.value;
//                       ^?
