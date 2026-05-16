import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Post, type PostProps } from './Post';

const post: PostProps = {
  title: 'Useful React patterns',
  description: 'A short guide to practical React patterns',
  readable_publish_date: '16 May',
  url: 'https://blog.atrera.com/useful-react-patterns',
  cover_image: 'https://blog.atrera.com/useful-react-patterns.jpg',
  created_at: '2026-05-16T00:00:00.000Z',
};

describe('Post', () => {
  it('links to the article in a new tab', () => {
    render(<Post {...post} />);

    const link = screen.getByRole('link', {
      name: `${post.title} ${post.readable_publish_date}`,
    });

    expect(link).toHaveAttribute('href', post.url);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the article title and publication date', () => {
    render(<Post {...post} />);

    expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument();
    expect(screen.getByText(post.readable_publish_date)).toBeInTheDocument();
  });

});
