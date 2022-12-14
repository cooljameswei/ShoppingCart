import React from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="flex  flex-wrap">
            {projects.map((project) => (
                <ProjectCard project={project} />
            ))}
        </div>
    );
}

export default ProjectList;