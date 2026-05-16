import { describe, expect, it } from 'vitest';
import { posts } from '../../../test/server';
import { isPost } from './isPost';

describe('isPost', () => {
  it('returns true for a complete post', () => {
    expect(isPost(posts[0])).toBe(true);
  });

  it('returns false when required fields are missing', () => {
    expect(isPost({
      title: 'First article',
      description: 'First article summary',
      readable_publish_date: '16 May',
      url: 'https://blog.atrera.com/first-article',
      cover_image: 'https://blog.atrera.com/first-article.jpg',
    })).toBe(false);
  });

  it('returns false when required fields use the wrong value type', () => {
    expect(isPost({
      title: 'First article',
      description: 'First article summary',
      readable_publish_date: '16 May',
      url: 'https://blog.atrera.com/first-article',
      cover_image: 'https://blog.atrera.com/first-article.jpg',
      created_at: 2026,
    })).toBe(false);
  });

  it('returns false for empty values', () => {
    expect(isPost(undefined)).toBe(false);
  });
});
