/* eslint-disable @typescript-eslint/no-explicit-any */
interface Newable<T> extends Function {
  new (...args: any[]): T;
}

export const registeredUseCases: Newable<any>[] = [];

export const UseCase = () => {
  return (target: Newable<any>): Newable<any> => {
    registeredUseCases.push(target);

    return target;
  };
};
