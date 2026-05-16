import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProfileIcons } from './ProfileIcons';

describe('ProfileIcons', () => {
  it.each([
    {
      id: 'github',
      url: 'https://github.com/snowleo208',
    },
    {
      id: 'codepen',
      url: 'https://codepen.io/snowleo208',
    },
    {
      id: 'dev-dot-to',
      url: 'https://dev.to/snowleo208',
    },
  ])('renders the $id profile link', ({ id, url }) => {
    render(<ProfileIcons links={[{ id, url }]} />);

    const link = screen.getByRole('link', { name: id });

    expect(link.getAttribute('href')).toBe(url);
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('skips unsupported profile links', () => {
    render(<ProfileIcons links={[{ id: 'mastodon', url: 'https://mastodon.social/@snowleo208' }]} />);

    expect(screen.queryByRole('link', { name: 'mastodon' })).toBeNull();
  });
});
