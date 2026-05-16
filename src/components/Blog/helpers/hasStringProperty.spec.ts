import { describe, expect, it } from 'vitest';
import { hasStringProperty } from './hasStringProperty';

describe('hasStringProperty', () => {
  it('returns true when the property exists with a string value', () => {
    expect(hasStringProperty({ title: 'First article' }, 'title')).toBe(true);
  });

  it('returns false when the property is missing', () => {
    expect(hasStringProperty({ title: 'First article' }, 'url')).toBe(false);
  });

  it('returns false when the property exists with a non-string value', () => {
    expect(hasStringProperty({ title: 123 }, 'title')).toBe(false);
  });
});
