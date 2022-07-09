import React from 'react';
import { Link } from 'react-router-dom';
import translate from '../portfolio';
import {TitleGrid, Title, ProjectGrid, ProjectItem, ProjectOverlay } from './Project.styles';

export const Project = () => {
  const list = translate.projects;
  const itemList = list.map(item => (
      <ProjectItem
        style={{
          backgroundImage: `url(${item?.bg})`,
        }}
      >
        <Link to={`/project/${item.urlKey}`}>
          <ProjectOverlay>
            <h2>{item.name}</h2>
            <p>{item.category}</p>
          </ProjectOverlay>
        </Link>
      </ProjectItem>
  ));

  return (
    <>
    <TitleGrid>
      <Title>All projects</Title>
    </TitleGrid>
    <ProjectGrid>{itemList}</ProjectGrid>
    </>
  );
}
