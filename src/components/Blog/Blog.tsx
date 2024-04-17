import React, { useEffect, useState } from 'react';
import translate from '../portfolio';
import {
  BlogHeader, BlogGrid, BlogPost, PostComponent, PostImage, PostTitle, PostTitleWrapper, PostDate,
} from './Blog.styles';

type Post = {
  title: string;
  description: string;
  readable_publish_date: string;
  url: string;
  cover_image: string;
  created_at: string;
}

const Post = (post: Post) => {
  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer">
      <PostComponent>
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          <PostImage
            src={post.cover_image}
            alt=""
            loading="lazy"
          />
        </a>
        <PostTitleWrapper>
            <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.readable_publish_date}</PostDate>
        </PostTitleWrapper>
      </PostComponent>
      </a>
  );
}

export const Blog = () => {
  const [post, setPost] = useState<Post[]>([]);
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
