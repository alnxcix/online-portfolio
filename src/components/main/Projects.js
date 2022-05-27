import { lazy } from "react";
import { projects_data as data } from "data/projects_data";

const ProjectsDataComponent = lazy(() =>
  import("components/dynamic/ProjectsDataComponent")
);

const Projects = () => (
  <>
    <h2 className="fw-bold m-0 mb-4">
      👨‍💻 <span className="gradient">Projects</span>
    </h2>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {data.map((e, i) => (
        <ProjectsDataComponent data={e} key={i} />
      ))}
    </div>
  </>
);

export default Projects;
