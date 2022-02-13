// import packages
import { lazy, Suspense, useState } from "react";

// import assets
import Avatar from "./assets/images/avatar.jfif";

// lazy load components
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experiences = lazy(() => import("./components/Experiences"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

const App = () => {
  const [activeBtn, setActiveBtn] = useState("About");
  return (
    <div className="container py-5">
      <div className="justify-content-center row">
        <div className="col-md-3">
          <img
            alt=""
            src={Avatar}
            className="rounded-circle w-100 mb-3"
            style={{
              borderColor: "#FCA311",
              borderStyle: "solid",
              borderWidth: "7px",
            }}
          />
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            {["About", "Education", "Experiences", "Projects", "Skills"].map(
              (e) => (
                <button
                  className={`btn rounded-pill me-1 px-3 shadow-none ${
                    activeBtn === e ? "active-btn" : "inactive-btn"
                  }`}
                  onClick={() => setActiveBtn(e)}
                >
                  {e}
                </button>
              )
            )}
          </div>
          <div className="card rounded-3">
            <div className="card-body">
              {activeBtn === "About" ? (
                <Suspense fallback={<div className="spinner-border" />}>
                  <About />
                </Suspense>
              ) : activeBtn === "Education" ? (
                <Suspense fallback={<div className="spinner-border" />}>
                  <Education />
                </Suspense>
              ) : activeBtn === "Experiences" ? (
                <Suspense fallback={<div className="spinner-border" />}>
                  <Experiences />
                </Suspense>
              ) : activeBtn === "Projects" ? (
                <Suspense fallback={<div className="spinner-border" />}>
                  <Projects />
                </Suspense>
              ) : (
                <Suspense fallback={<div className="spinner-border" />}>
                  <Skills />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
