export const hasStringProperty = (value: object, property: string) => {
  const descriptor = Object.getOwnPropertyDescriptor(value, property);

  if (!descriptor) {
    return false;
  }

  return typeof descriptor.value === 'string';
}
