import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test/renderWithRouter';
import { Menu } from './Menu';

describe('Menu', () => {
  it('links back to the homepage', () => {
    renderWithRouter(<Menu />);

    expect(screen.getByRole('link', { name: "Yuki Cheung's Portfolio" }).getAttribute('href')).toBe('/');
  });
});
