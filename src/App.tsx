import React from 'react';
import './app.scss';
import { MOCK_PROJECTS } from './projects/MockProjects';
import ProjectList from './projects/ProjectList';
function App() {
  return (
    <div className="container mx-auto">
      <ProjectList projects={MOCK_PROJECTS} />
    </div>
  );
}

export default App;
