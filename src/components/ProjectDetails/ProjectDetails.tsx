import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import translate from '../portfolio';
import {
  TextLink, ProjectContainer, HeroImage, LinkWrapper, Text, ImageGallery, ThumbnailImage, Box, TextLinkWrapper, ButtonLink
} from './ProjectDetails.styles';

export function ProjectDetails() {
  const { url } = useParams();
  const project = translate.projects.filter(
    (item) => item.urlKey === url,
  );

  const projectItem = project.map((ele) => (
    <section key={ele.urlKey}>
      <Helmet>
        <title>
          {ele.name}
          {' '}
          - Projects | Yuki Cheung
        </title>
      </Helmet>

      <div>
        <h1>{ele.name}</h1>
        <Text>{ele.desc}</Text>
        <Text>{ele.techDesc}</Text>
      </div>

      <Box>
        <p>
          <strong>Client:{" "}</strong>
          {ele.client}
        </p>
        <p>
          <strong>Date:{" "}</strong>
          {ele.date}
        </p>
        <p>
          <strong>Category:{" "}</strong>
          {ele.category}
        </p>
      </Box>

      <LinkWrapper>
        <ButtonLink href={ele.link} target="_blank" rel="noopener noreferrer">Live site</ButtonLink>
      </LinkWrapper>

      <ImageGallery>
        {ele.gallery
          ? ele.gallery.map((item, idx) => (
            <a target="_blank" rel="noopener noreferrer" href={item} key={idx}>
              <ThumbnailImage loading="lazy" src={item} alt="" />
            </a>
          ))
          : ''}
      </ImageGallery>
    </section>
  ));

  return (
    <>
      <HeroImage
        style={{
          backgroundImage: `url(${project[0].bg})`,
        }}
      />
      <ProjectContainer>
        {project && project.length === 1 ? projectItem : 'No project'}
      </ProjectContainer>
      <TextLinkWrapper>
        <TextLink href="/">
          <p>Back to Home</p>
        </TextLink>
      </TextLinkWrapper>
    </>
  );
}
