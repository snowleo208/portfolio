import React, { useEffect, useState } from 'react';
import translate from '../portfolio';
import {
  BlogHeader, BlogGrid, BlogPost,
} from './Blog.styles';
import { Post, type PostProps } from './Post';

export const Blog = () => {
  const [post, setPost] = useState<PostProps[]>([]);
  const fetchRss = () => fetch('https://blog.atrera.com/latest.json', {
    mode: 'cors',
  }).then((res) => res.json()).then((posts) => setPost(posts));

  useEffect(() => {
    fetchRss();
  }, []);

  return (
    <BlogGrid>
      <BlogHeader>{translate.blogTitle}</BlogHeader>
      <BlogPost>
        {post.map((post, number) => (
          number <= 2 && <Post key={post.url} {...post} />
        ))}
      </BlogPost>
    </BlogGrid>
  );
}
