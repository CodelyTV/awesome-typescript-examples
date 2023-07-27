/* eslint-disable @typescript-eslint/no-explicit-any */

import { CreateCoursePayload } from "./CreateCoursePayload";
import { CreateUserPayload } from "./CreateUserPayload";
import { EndpointPayload } from "./EndpointPayload";

type Endpoint = {
  name: string;
  url: string;
  payload: new (...params: any) => EndpointPayload;
};

function setupFetcher<
  const GetEndpoint extends Readonly<Endpoint>,
  const PostEndpoint extends Readonly<Endpoint>
>(endpoints: {
  get: ReadonlyArray<GetEndpoint>;
  post: ReadonlyArray<PostEndpoint>;
}) {
  const endpointNameToUrl = (method: keyof typeof endpoints, name: string) => {
    const t = endpoints[method];

    const endpoint = t.find((t) => t.name === name);

    if (!endpoint) {
      throw new Error(`Unexpected fetcher error: Endpoint ${name} not found`);
    }

    return endpoint.url;
  };

  const post = <
    TName extends PostEndpoint["name"],
    TPayload extends Extract<PostEndpoint, { name: TName }>["payload"]
  >(
    name: TName,
    payload: InstanceType<TPayload>
  ) => {
    console.log(endpointNameToUrl("post", name), payload.toString());
  };

  return { post };
}

const api = setupFetcher({
  get: [],
  post: [
    {
      name: "createUser",
      url: "/api/user",
      payload: CreateUserPayload,
    },
    { name: "createCourse", url: "/api/course", payload: CreateCoursePayload },
  ],
});

api.post(
  "createCourse",
  new CreateCoursePayload("TypeScript Avanzado", new Date())
);
