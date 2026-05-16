import React, { useEffect, useState } from 'react';
import translate from '../portfolio';
import {
  BlogHeader, BlogGrid, BlogPost, BlogError,
} from './Blog.styles';
import { Post, type PostProps } from './Post';
import { fetchLatestPosts, isAbortError } from './helpers';

export const Blog = () => {
  const [post, setPost] = useState<PostProps[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const loadPosts = async () => {
      try {
        const posts = await fetchLatestPosts(controller.signal);

        if (controller.signal.aborted) {
          return;
        }

        setPost(posts);
        setHasError(false);
      } catch (error) {
        if (isAbortError(error)) {
          return;
        }

        setPost([]);
        setHasError(true);
      }
    }

    loadPosts();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <BlogGrid>
      <BlogHeader>{translate.blogTitle}</BlogHeader>
      {hasError ? (
        <BlogError role="alert">Unable to load recent articles.</BlogError>
      ) : (
        <BlogPost>
          {post.slice(0, 3).map((post) => (
            <Post key={post.url} {...post} />
          ))}
        </BlogPost>
      )}
    </BlogGrid>
  );
}
