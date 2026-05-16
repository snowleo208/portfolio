import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';

type RenderWithRouterOptions = {
  path?: string;
  route?: string;
};

export const renderWithRouter = (
  component: React.ReactNode,
  options: RenderWithRouterOptions = {},
) => {
  const path = options.path ?? '/';
  const route = options.route ?? '/';

  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path={path} element={component} />
      </Routes>
    </MemoryRouter>,
  );
};
