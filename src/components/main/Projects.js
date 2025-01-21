import { lazy } from "react";
import { academic_projects_data as data1 } from "data/projects_data";
import { personal_projects_data as data2 } from "data/projects_data";

const ProjectsDataComponent = lazy(() =>
  import("components/dynamic/ProjectsDataComponent")
);

const Projects = () => (
  <>
    <div className="d-flex gap-3">
      <h2>🏫</h2>
      <div className="flex-grow-1 border-bottom mb-3 pb-3">
        <h2 className="fw-bold gradient">Academic Projects</h2>
        <p className="text-muted">
          Projects that I have developed as part of my academic requirements.
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-3">
          {data1.map((e, i) => (
            <ProjectsDataComponent data={e} key={i} />
          ))}
        </div>
      </div>
    </div>
    <div className="d-flex gap-3">
      <h2>👨‍💻</h2>
      <div className="flex-grow-1">
        <h2 className="fw-bold gradient">Personal Projects</h2>
        <p className="text-muted">
          Projects that I worked on during my personal free time.
        </p>
        <div className="row row-cols-1 row-cols-lg-2 g-3">
          {data2.map((e, i) => (
            <ProjectsDataComponent data={e} key={i} />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Projects;
