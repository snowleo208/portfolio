import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test/renderWithRouter';
import translate from '../portfolio';
import { Project } from './Project';

describe('Project', () => {
  it('renders the projects list', () => {
    renderWithRouter(<Project />);

    expect(screen.getByText('All projects')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(translate.projects.length);
  });

  it('links each project to its detail page', () => {
    const [project] = translate.projects;

    renderWithRouter(<Project />);

    expect(screen.getByRole('link', { name: new RegExp(project.name) }).getAttribute('href')).toBe(`/project/${project.urlKey}/`);
  });
});
