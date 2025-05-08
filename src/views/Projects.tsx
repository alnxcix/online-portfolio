// ** react imports **
import { lazy } from 'react';

// ** data **
import { client_based_projects } from 'data/projects_data';
import { showcase_projects } from 'data/projects_data';

// ** custom components **
const ProjectsDataComponent = lazy(
  () => import('components/ProjectsDataComponent')
);

// =====================
const Projects = () => (
  <>
    <div className="d-flex gap-3">
      <h2>🏫</h2>
      <div className="flex-grow-1 border-bottom mb-3 pb-3">
        <h2 className="fw-bold gradient">Client-Based Projects</h2>
        <p className="text-muted">
          Projects developed for real-world clients or organizations.
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-3">
          {client_based_projects.map((e, i) => (
            <ProjectsDataComponent data={e} key={i} />
          ))}
        </div>
      </div>
    </div>
    <div className="d-flex gap-3">
      <h2>👨‍💻</h2>
      <div className="flex-grow-1">
        <h2 className="fw-bold gradient">Showcase Projects</h2>
        <p className="text-muted">
          Personal or academic projects that demonstrate technical skills.
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-3">
          {showcase_projects.map((e, i) => (
            <ProjectsDataComponent data={e} key={i} />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Projects;
