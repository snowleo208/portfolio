import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  CodepenIcon, DevToIcon, GithubIcon, SnowflakeIcon,
} from './icons';

describe('icons', () => {
  it('renders each icon title', () => {
    render(
      <>
        <CodepenIcon title="codepen" />
        <DevToIcon title="dev-dot-to" />
        <GithubIcon title="github" />
        <SnowflakeIcon title="portfolio" />
      </>,
    );

    expect(screen.getByTitle('codepen')).toBeInTheDocument();
    expect(screen.getByTitle('dev-dot-to')).toBeInTheDocument();
    expect(screen.getByTitle('github')).toBeInTheDocument();
    expect(screen.getByTitle('portfolio')).toBeInTheDocument();
  });
});
