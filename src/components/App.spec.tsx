import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import translate from './portfolio';
import App from './App';

describe('App', () => {
  it('renders the homepage route without the outer menu', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1, name: translate.header })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: "Yuki Cheung's Portfolio" })).toHaveLength(1);
  });

  it('renders the outer menu away from the homepage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1, name: translate.headerButton })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: "Yuki Cheung's Portfolio" }).getAttribute('href')).toBe('/');
  });
});
