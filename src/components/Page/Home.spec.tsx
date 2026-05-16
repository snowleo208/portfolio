import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test/renderWithRouter';
import { posts } from '../../test/server';
import translate from '../portfolio';
import Home from './Home';

describe('Home', () => {
  it('renders the homepage sections', async () => {
    renderWithRouter(<Home />);

    expect(screen.getByRole('heading', { level: 1, name: translate.header })).toBeInTheDocument();
    expect(screen.getByText('All projects')).toBeInTheDocument();
    expect(screen.getByText(translate.blogTitle)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: translate.contactHeader })).toBeInTheDocument();
    expect(await screen.findByText(posts[0].title)).toBeInTheDocument();
  });
});
