import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test/renderWithRouter';
import translate from '../portfolio';
import ProjectPage from './ProjectPage';

describe('ProjectPage', () => {
  it('renders the projects index', () => {
    renderWithRouter(<ProjectPage />);

    expect(screen.getByText('All projects')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(translate.projects.length);
  });
});
