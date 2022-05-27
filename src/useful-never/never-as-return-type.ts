function save(): void {
  console.log("A side effect such as saving to DB");
}

const saveFunctionReturnThatShouldBeUndefined = save();
console.log(saveFunctionReturnThatShouldBeUndefined);
// 💡 JavaScript returns `undefined` by default
// Even if _you_ do not return something

function remove(): never {
  throw new Error("Invalid operation for an append-only DB");
}
// 💡 In this case, even JavaScript can not return anything

try {
  remove();
} catch (e: unknown) {
  if (e instanceof Error) {
    console.log(e.message);
  }
}

function removeBy(id: number): never {
  if (id <= 0) {
    throw new Error(`Invalid identifier while trying to remove it: <${id}>`);
  }

  console.log("A side effect such as removing an item from the DB");
}

const removeByFunctionReturnThatShouldBeUndefined = removeBy(3);
console.log(removeByFunctionReturnThatShouldBeUndefined);
// 💡 In this case we can not use `never` because for `id` values greater than 0 JavaScript will return `undefined`
