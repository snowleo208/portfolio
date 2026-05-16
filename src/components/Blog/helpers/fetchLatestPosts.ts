import { blogFeedUrl } from './constants';
import { isPost } from './isPost';
import { throwIfAborted } from './throwIfAborted';

export const fetchLatestPosts = async (signal?: AbortSignal) => {
  throwIfAborted(signal);

  const response = await fetch(blogFeedUrl, {
    mode: 'cors',
    signal,
  });

  throwIfAborted(signal);

  if (!response.ok) {
    throw new Error('Unable to fetch latest articles');
  }

  const posts: unknown = await response.json();

  throwIfAborted(signal);

  if (!Array.isArray(posts) || !posts.every(isPost)) {
    throw new Error('Latest articles response is invalid');
  }

  return posts;
}
