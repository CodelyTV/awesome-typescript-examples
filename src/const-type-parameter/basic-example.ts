/* eslint-disable @typescript-eslint/no-unused-vars */
// Example with "as const"
export type User = { name: string; age: number };

function getUserName<T extends User>(username: T): T["name"] {
  return username.name;
}

const userName = getUserName({ name: "Isma", age: 31 } as const);
//     ^?

// Ejemplo const type parameter
function getUserAge<const T extends User>(username: T): T["age"] {
  return username.age;
}

const userAge = getUserAge({ name: "Isma", age: 31 });
//     ^?

// Ejemplo con array y readonly
// En este ejemplo es importante combinar el const con el readonly  porque si no el array sería
// mutable dentro de la función y no se infiere el tipo
type HasNames = { names: readonly string[] };
function getNamesExactly<const T extends HasNames>(arg: T): T["names"] {
  return arg.names;
}

const names = getNamesExactly({ names: ["Javi", "Ronny", "Isma"] });
//     ^?
