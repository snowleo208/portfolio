import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import translate from '../../portfolio';
import { Footer } from './Footer';

describe('Footer', () => {
  it.each(translate.footer)('renders the $id social link', ({ id, url }) => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: id }).getAttribute('href')).toBe(url);
  });

  it('credits the design source', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Svetlana' }).getAttribute('href')).toBe('https://dribbble.com/shots/3782221-Free-PSD-Portfolio-Template');
  });
});
