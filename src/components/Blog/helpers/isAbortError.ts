export const abortErrorName = 'AbortError';

export const isAbortError = (error: unknown) => {
  if (error instanceof DOMException) {
    return error.name === abortErrorName;
  }

  if (typeof error !== 'object' || error === null) {
    return false;
  }

  if (!('name' in error)) {
    return false;
  }

  return error.name === abortErrorName;
}
