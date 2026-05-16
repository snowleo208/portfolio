import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test/renderWithRouter';
import translate from '../portfolio';
import About from './About';

describe('About', () => {
  it('renders the profile content and contact link', () => {
    renderWithRouter(<About />);

    expect(screen.getByRole('heading', { level: 1, name: translate.headerButton })).toBeInTheDocument();
    expect(screen.getByText(translate.aboutDesc)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: translate.aboutButton }).getAttribute('href')).toBe('/contact');
  });

  it.each(translate.footer)('renders the $id profile link', ({ id, url }) => {
    renderWithRouter(<About />);

    expect(screen.getByRole('link', { name: id }).getAttribute('href')).toBe(url);
  });
});
