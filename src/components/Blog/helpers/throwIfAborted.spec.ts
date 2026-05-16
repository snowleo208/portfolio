import { describe, expect, it } from 'vitest';
import { isAbortError } from './isAbortError';
import { throwIfAborted } from './throwIfAborted';

describe('throwIfAborted', () => {
  it('does not throw when a signal is active', () => {
    const controller = new AbortController();

    expect(() => {
      throwIfAborted(controller.signal);
    }).not.toThrow();
  });

  it('throws an abort error when a signal is aborted', () => {
    const controller = new AbortController();
    let error: unknown;

    controller.abort();

    try {
      throwIfAborted(controller.signal);
    } catch (caughtError) {
      error = caughtError;
    }

    expect(isAbortError(error)).toBe(true);
    expect(error).toBeInstanceOf(DOMException);
  });
});
