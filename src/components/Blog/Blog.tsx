import React, { useEffect, useState } from 'react';
import translate from '../portfolio';
import {
  BlogHeader, BlogGrid, BlogPost, PostComponent, PostImage, PostTitle, PostTitleWrapper, PostDate,
} from './Blog.styles';

type Post = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  cover_image: string;
  created_at: string;
}

export function Blog() {
  const [post, setPost] = useState<Post[]>([]);
  const fetchRss = () => fetch('https://dev.to/api/articles/latest?username=snowleo208', {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()).then((posts) => setPost(posts));

  useEffect(() => {
    fetchRss();
  }, []);

  function Post(post: Post) {
    return (
      <PostComponent>
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          <PostImage
            src={post.cover_image}
            alt="Dev.to"
          />
        </a>
        <PostTitleWrapper>
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            <PostTitle>{post.title}</PostTitle>
          </a>
          <PostDate>{post.created_at}</PostDate>
        </PostTitleWrapper>
      </PostComponent>
    );
  }

  return (
    <BlogGrid>
      <BlogHeader>{translate.blogTitle}</BlogHeader>
      <BlogPost>
        {post.map((post, number) => (
          number <= 2 && <Post {...post} />
        ))}
      </BlogPost>
    </BlogGrid>
  );
}
