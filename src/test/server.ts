import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const posts = [
  {
    title: 'First article',
    description: 'First article summary',
    readable_publish_date: '16 May',
    url: 'https://blog.atrera.com/first-article',
    cover_image: 'https://blog.atrera.com/first-article.jpg',
    created_at: '2026-05-16T00:00:00.000Z',
  },
  {
    title: 'Second article',
    description: 'Second article summary',
    readable_publish_date: '15 May',
    url: 'https://blog.atrera.com/second-article',
    cover_image: 'https://blog.atrera.com/second-article.jpg',
    created_at: '2026-05-15T00:00:00.000Z',
  },
  {
    title: 'Third article',
    description: 'Third article summary',
    readable_publish_date: '14 May',
    url: 'https://blog.atrera.com/third-article',
    cover_image: 'https://blog.atrera.com/third-article.jpg',
    created_at: '2026-05-14T00:00:00.000Z',
  },
  {
    title: 'Fourth article',
    description: 'Fourth article summary',
    readable_publish_date: '13 May',
    url: 'https://blog.atrera.com/fourth-article',
    cover_image: 'https://blog.atrera.com/fourth-article.jpg',
    created_at: '2026-05-13T00:00:00.000Z',
  },
];

export const server = setupServer(
  http.get('https://blog.atrera.com/latest.json', () => {
    return HttpResponse.json(posts);
  }),
  http.post('https://formspree.io/mzbkpjdj', () => {
    return HttpResponse.json({}, { status: 200 });
  }),
);
