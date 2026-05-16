import { describe, expect, it } from 'vitest';
import { isAbortError } from './isAbortError';

describe('isAbortError', () => {
  it('returns true for abort DOM exceptions', () => {
    expect(isAbortError(new DOMException('Aborted', 'AbortError'))).toBe(true);
  });

  it('returns true for abort-shaped errors', () => {
    expect(isAbortError({ name: 'AbortError' })).toBe(true);
  });

  it('returns false for other errors', () => {
    expect(isAbortError(new Error('Unable to fetch latest articles'))).toBe(false);
  });

  it('returns false for empty errors', () => {
    expect(isAbortError(undefined)).toBe(false);
  });
});
