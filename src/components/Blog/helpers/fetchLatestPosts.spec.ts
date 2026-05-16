import { http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { posts, server } from '../../../test/server';
import { blogFeedUrl } from './constants';
import { fetchLatestPosts } from './fetchLatestPosts';
import { isAbortError } from './isAbortError';

describe('fetchLatestPosts', () => {
  it('fetches the latest posts', async () => {
    await expect(fetchLatestPosts()).resolves.toStrictEqual(posts);
  });

  it('rejects when the feed request fails', async () => {
    server.use(
      http.get(blogFeedUrl, () => {
        return HttpResponse.json({}, { status: 500 });
      }),
    );

    await expect(fetchLatestPosts()).rejects.toThrow('Unable to fetch latest articles');
  });

  it('rejects when the feed response is invalid', async () => {
    server.use(
      http.get(blogFeedUrl, () => {
        return HttpResponse.json({ articles: posts });
      }),
    );

    await expect(fetchLatestPosts()).rejects.toThrow('Latest articles response is invalid');
  });

  it('rejects with an abort error when the signal has already been aborted', async () => {
    const controller = new AbortController();

    controller.abort();

    const error = await fetchLatestPosts(controller.signal).catch((error: unknown) => error);

    expect(isAbortError(error)).toBe(true);
    expect(error).toBeInstanceOf(DOMException);
  });
});
