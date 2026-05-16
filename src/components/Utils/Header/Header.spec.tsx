import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../../test/renderWithRouter';
import translate from '../../portfolio';
import { Header } from './Header';

describe('Header', () => {
  it('renders the homepage banner and about link', () => {
    renderWithRouter(<Header />);

    expect(screen.getByRole('heading', { level: 1, name: translate.header })).toBeInTheDocument();
    expect(screen.getByText(translate.headerText)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: translate.headerButton }).getAttribute('href')).toBe('/about');
  });
});
