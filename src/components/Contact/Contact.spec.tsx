import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { delay, http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { server } from '../../test/server';
import { Contact } from './Contact';

describe('Contact', () => {
  it('shows validation messages when required fields are empty', async () => {
    render(<Contact />);

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Please enter a valid email format')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid name with alphabets only')).toBeInTheDocument();
    expect(screen.getByText('Please enter at least 10 characters and less than 400 characters.')).toBeInTheDocument();
  });

  it('submits the completed form and shows the thank you message', async () => {
    const expectedPayload = {
      email: 'yuki@example.com',
      name: 'Yuki',
      message: 'Hello, I would like to talk about a project.',
    };

    server.use(
      http.post('https://formspree.io/mzbkpjdj', async ({ request }) => {
        await expect(request.json()).resolves.toStrictEqual(expectedPayload);

        return HttpResponse.json({}, { status: 200 });
      }),
    );

    render(<Contact />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'yuki@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Yuki' },
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Hello, I would like to talk about a project.' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Thank you for your message. I will reply soon after I receive it.')).toBeInTheDocument();
  });

  it('shows a loading state while the form is submitting', async () => {
    const expectedPayload = {
      email: 'yuki@example.com',
      name: 'Yuki',
      message: 'Hello, I would like to talk about a project.',
    };

    server.use(
      http.post('https://formspree.io/mzbkpjdj', async ({ request }) => {
        await expect(request.json()).resolves.toStrictEqual(expectedPayload);
        await delay(100);

        return HttpResponse.json({}, { status: 200 });
      }),
    );

    render(<Contact />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'yuki@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Yuki' },
    });
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Hello, I would like to talk about a project.' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByRole('button', { name: 'Submitting...' })).toBeDisabled();
    expect(await screen.findByText('Thank you for your message. I will reply soon after I receive it.')).toBeInTheDocument();
  });
});
