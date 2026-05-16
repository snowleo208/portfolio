import { abortErrorName } from './isAbortError';

export const throwIfAborted = (signal?: AbortSignal) => {
  if (!signal?.aborted) {
    return;
  }

  throw new DOMException('Latest articles request was aborted', abortErrorName);
}
