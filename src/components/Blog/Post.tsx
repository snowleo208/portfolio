import React from 'react';
import {
  PostComponent, PostImage, PostTitle, PostTitleWrapper, PostDate,
} from './Blog.styles';

export type PostProps = {
  title: string;
  description: string;
  readable_publish_date: string;
  url: string;
  cover_image: string;
  created_at: string;
}

export const Post = (post: PostProps) => {
  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer">
      <PostComponent>
        <PostImage
          src={post.cover_image}
          alt=""
          loading="lazy"
        />
        <PostTitleWrapper>
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.readable_publish_date}</PostDate>
        </PostTitleWrapper>
      </PostComponent>
    </a>
  );
}
