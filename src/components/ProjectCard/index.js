import React, {useContext} from 'react';
// import "./style.css";
import Project from '../Project';
import {ProjectContext} from '../../utils/ProjectContext';

function ProjectCard() {
  const [projects, setProjects] = useContext(ProjectContext);
  return (
    <div>
      <section class="row p-2">
        {projects.map(project => (
        <Project 
          name={project.name}
          image={project.image}
          link={project.link}
          repository={project.repository}
          key={project.id}/>
        ))}
      </section>
    </div>
  );
}

export default ProjectCard;