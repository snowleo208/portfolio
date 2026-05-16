import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import translate from '../portfolio';
import { Logo } from './Logo';

describe('Logo', () => {
  it.each(translate.brandList)('renders the %s logo', (brand) => {
    render(<Logo />);

    expect(screen.getByRole('img', { name: `${brand} logo` })).toBeInTheDocument();
  });
});
