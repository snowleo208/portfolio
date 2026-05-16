import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { posts } from '../../test/server';
import { Blog } from './Blog';

describe('Blog', () => {
  it('renders the latest three articles', async () => {
    render(<Blog />);

    expect(await screen.findByText(posts[0].title)).toBeInTheDocument();
    expect(screen.getByText(posts[1].title)).toBeInTheDocument();
    expect(screen.getByText(posts[2].title)).toBeInTheDocument();
    expect(screen.queryByText(posts[3].title)).toBeNull();
  });
});
