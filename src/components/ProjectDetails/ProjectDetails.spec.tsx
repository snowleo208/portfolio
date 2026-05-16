import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test/renderWithRouter';
import translate from '../portfolio';
import { ProjectDetails } from './ProjectDetails';

describe('ProjectDetails', () => {
  it('renders the matching project details', () => {
    const [project] = translate.projects;

    renderWithRouter(<ProjectDetails />, {
      path: '/project/:url',
      route: `/project/${project.urlKey}`,
    });

    expect(screen.getByRole('heading', { level: 1, name: project.name })).toBeInTheDocument();
    expect(screen.getByText(project.desc)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Live site' }).getAttribute('href')).toBe(project.link);
  });

  it('renders an empty state for an unknown project', () => {
    renderWithRouter(<ProjectDetails />, {
      path: '/project/:url',
      route: '/project/unknown-project',
    });

    expect(screen.getByText('No project')).toBeInTheDocument();
  });
});
