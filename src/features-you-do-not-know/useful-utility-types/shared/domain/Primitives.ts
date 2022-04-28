import { LiteralObject } from "./LiteralObject";
import { Properties } from "./Properties";

type ValueObjectValue<T> = {
  [key in keyof T]: T[key] extends { value: unknown }
    ? Pick<T[key], "value">["value"]
    : T[key] extends Array<LiteralObject>
    ? Primitives<T[key][number]>[]
    : T[key] extends LiteralObject
    ? Primitives<T[key]>
    : T[key];
};

export type Primitives<T> = ValueObjectValue<Properties<T>>;
