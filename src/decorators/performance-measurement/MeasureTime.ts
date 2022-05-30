export function MeasureTime(
  _target: unknown,
  _propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    console.time("performance");
    const result = originalMethod.apply(this, args);
    console.timeEnd("performance");

    return result;
  };

  return descriptor;
}
