import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test/renderWithRouter';
import translate from '../portfolio';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  it('renders the contact form', () => {
    renderWithRouter(<ContactPage />);

    expect(screen.getByRole('heading', { level: 1, name: translate.contactHeader })).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});
