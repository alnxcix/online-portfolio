import { lazy, Suspense, useEffect, useState } from "react";
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
  const [activeBtn, setActiveBtn] = useState("About");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        // eslint-disable-next-line no-mixed-operators
        if (window.innerWidth < 768 !== isMobile)
          setIsMobile(window.innerWidth < 768);
      },
      false
    );
  }, [isMobile]);
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
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
            {isMobile ? (
              <div className="dropdown">
                <button
                  className="btn-active btn dropdown-toggle mb-3 px-3 rounded-pill shadow-none"
                  data-bs-toggle="dropdown"
                >
                  {activeBtn}
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
                        onClick={() => setActiveBtn(e)}
                      >
                        {e}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="mb-3">
                {[
                  "About",
                  "Education",
                  "Experiences",
                  "Projects",
                  "Skills",
                ].map((e, i) => (
                  <button
                    className={`btn btn-default rounded-pill me-1 px-3 shadow-none ${
                      activeBtn === e ? "btn-active" : null
                    }`}
                    key={i}
                    onClick={() => setActiveBtn(e)}
                  >
                    {e}
                  </button>
                ))}
              </div>
            )}

            <div className="card rounded-3 w-100">
              <div className="card-body">
                <Suspense fallback={<div className="spinner-border" />}>
                  {activeBtn === "About" ? (
                    <About />
                  ) : activeBtn === "Education" ? (
                    <Education />
                  ) : activeBtn === "Experiences" ? (
                    <Experiences />
                  ) : activeBtn === "Projects" ? (
                    <Projects />
                  ) : (
                    <Skills />
                  )}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="align-items-center d-flex footer justify-content-between p-3">
        <small className="m-0">
          <FontAwesomeIcon icon={faCopyright} /> Copyright 2022 Roy Allen Nidoy
        </small>
      </div>
    </div>
  );
};

export default App;
