// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
export function ClassImporterInformer<T extends { new (...args: any[]): {} }>(
  decoratedClassInstance: T
) {
  console.info(`Importing an instance of ${decoratedClassInstance.name}`);
}
