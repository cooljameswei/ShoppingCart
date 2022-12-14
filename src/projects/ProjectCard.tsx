import React from 'react';
import { Project } from './Project'

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}


interface ProjectCardProps {
    project: Project
}

function ProjectCard(props: ProjectCardProps) {
    const { project } = props;
    return (
        <div key={project.id} className="box-border h-96 w-80 p-4 border-4  bg-slate-300">
            <div className="card">
                <img src={project.imageUrl} alt={project.name} />
                <section className="section">
                    <h5 className="strong">
                        <strong>{project.name}</strong>
                    </h5>
                    <p>{project.description}</p>
                    <p>Budget : {project.budget.toLocaleString()}</p>
                </section>
            </div>
        </div>
    );

}

export default ProjectCard;