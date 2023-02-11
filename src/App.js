import { lazy, Suspense, useState } from "react";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalImage from "react-modal-image";
import AvatarLarge from "assets/images/avatar-lg.webp";
import AvatarSmall from "assets/images/avatar-sm.webp";

const About = lazy(() => import("components/main/About"));
const Education = lazy(() => import("components/main/Education"));
const Experiences = lazy(() => import("components/main/Experiences"));
const Projects = lazy(() => import("components/main/Projects"));
const Skills = lazy(() => import("components/main/Skills"));

const App = () => {
  const [activeView, setActiveView] = useState("About");
  const views = {
    About: <About />,
    Education: <Education />,
    Experiences: <Experiences />,
    Projects: <Projects />,
    Skills: <Skills />,
  };
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* main content */}
      <div className="flex-grow-1 container py-5">
        <div className="justify-content-center row">
          <div className="col-5 col-md-2">
            <ModalImage
              alt="It's me! 😀"
              className="rounded-circle w-100 mb-3 shadow"
              hideDownload
              hideZoom
              large={AvatarLarge}
              small={AvatarSmall}
            />
          </div>
          <div className="col-md-7">
            {/* on smaller screens */}
            <div className="dropdown d-lg-none">
              <button
                className="btn-active btn dropdown-toggle mb-3 px-3 rounded-pill shadow-none"
                data-bs-toggle="dropdown"
              >
                {activeView}
              </button>
              <ul className="dropdown-menu">
                {[
                  "About",
                  "Education",
                  "Experiences",
                  "Projects",
                  "Skills",
                ].map((e, i) => (
                  <li key={i}>
                    <button
                      className="dropdown-item"
                      onClick={() => setActiveView(e)}
                    >
                      {e}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* on larger screens */}
            <div className="mb-3 d-none d-lg-block">
              {["About", "Education", "Experiences", "Projects", "Skills"].map(
                (e, i) => (
                  <button
                    className={`btn btn-default rounded-pill me-1 px-3 shadow-none ${
                      activeView === e ? "btn-active" : null
                    }`}
                    key={i}
                    onClick={() => setActiveView(e)}
                  >
                    {e}
                  </button>
                )
              )}
            </div>
            <div className="card rounded-3 w-100">
              <div className="card-body">
                <Suspense fallback={<div className="spinner-border" />}>
                  {views[activeView]}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="align-items-center d-flex footer justify-content-between p-3">
        <small className="m-0">
          <FontAwesomeIcon icon={faCopyright} /> Copyright 2023 Roy Allen Nidoy
        </small>
      </div>
    </div>
  );
};

export default App;
