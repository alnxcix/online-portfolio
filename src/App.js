// necessary imports
import { lazy, Suspense, useState } from "react";
import Avatar from "assets/images/avatar.jfif";

// lazy load components
const About = lazy(() => import("components/main/About"));
const Education = lazy(() => import("components/main/Education"));
const Experiences = lazy(() => import("components/main/Experiences"));
const Projects = lazy(() => import("components/main/Projects"));
const Skills = lazy(() => import("components/main/Skills"));

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
              (e, i) => (
                <button
                  className={`btn rounded-pill me-1 px-3 shadow-none ${
                    activeBtn === e ? "active-btn" : "inactive-btn"
                  }`}
                  key={i}
                  onClick={() => setActiveBtn(e)}
                >
                  {e}
                </button>
              )
            )}
          </div>
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
  );
};

export default App;
