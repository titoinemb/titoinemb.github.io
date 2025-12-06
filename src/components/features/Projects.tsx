import React from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/features/projects.scss";
import { ProjectsList, ProjectItem } from "../";

export const Projects: React.FC = () => {
  let projectsJson = require('../../data/projects.json');
  let { id } = useParams();

  return (
    <div className="projects">
      <>
        {!id ? (
          <ProjectsList projectsJson={projectsJson} />
        ) : (
          <ProjectItem projectsJson={projectsJson[id]} />
        )}
      </>
    </div>
  );
};