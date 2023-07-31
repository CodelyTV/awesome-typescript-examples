/* eslint-disable @typescript-eslint/ban-ts-comment */
type Route = { path: string; children?: Routes };
type Routes = { [key: string]: Route };

// Example 1
const routes1: Routes = {
  AUTH: {
    path: "/auth",
  },
  LIST: {
    path: "/list",
  },
};

routes1.NOTFOUNDROUTE.path;

// Example 2
const routes2 = {
  AUTH: {
    path: "/auth",
  },
  LIST: {
    path: "/list",
  },
} as const;

// We get an error but lost autocomplete in routes2 variable
// @ts-expect-error
routes2.NOTFOUNDROUTE.path;

// Example 3
const routes3 = {
  AUTH: {
    path: "/auth",
  },
  LIST: {
    path: "/list",
  },
} satisfies Routes;

// @ts-expect-error
routes3.NOTFOUNDROUTE.path;
