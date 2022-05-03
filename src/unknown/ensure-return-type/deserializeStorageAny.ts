/* eslint-disable @typescript-eslint/no-explicit-any */
export const deserializeStorageAny = (key: string): any => {
  const storageItem = localStorage.getItem(key);

  if (storageItem === null) {
    throw new Error("Storage item is not set");
  }

  return JSON.parse(storageItem);
};
