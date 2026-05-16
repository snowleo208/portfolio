import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { delay, http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { posts, server } from '../../test/server';
import { Blog } from './Blog';

const latestPostsUrl = 'https://blog.atrera.com/latest.json';

describe('Blog', () => {
  it('renders the latest three articles', async () => {
    render(<Blog />);

    expect(await screen.findByText(posts[0].title)).toBeInTheDocument();
    expect(screen.getByText(posts[1].title)).toBeInTheDocument();
    expect(screen.getByText(posts[2].title)).toBeInTheDocument();
    expect(screen.queryByText(posts[3].title)).toBeNull();
  });

  it('shows an error message when the feed request fails', async () => {
    server.use(
      http.get(latestPostsUrl, () => {
        return HttpResponse.json({}, { status: 500 });
      }),
    );

    render(<Blog />);

    expect(await screen.findByRole('alert')).toHaveTextContent('Unable to load recent articles.');
    expect(screen.queryByText(posts[0].title)).toBeNull();
  });

  it('aborts the feed request when unmounted', async () => {
    let hasRequestedFeed = false;
    let hasAbortedRequest = false;

    server.use(
      http.get(latestPostsUrl, async ({ request }) => {
        hasRequestedFeed = true;

        await delay(100);

        hasAbortedRequest = request.signal.aborted;

        return HttpResponse.json(posts);
      }),
    );

    const { unmount } = render(<Blog />);

    await waitFor(() => {
      expect(hasRequestedFeed).toBe(true);
    });

    unmount();

    await waitFor(() => {
      expect(hasAbortedRequest).toBe(true);
    });
  });
});
