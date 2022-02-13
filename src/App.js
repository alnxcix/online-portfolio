// import packages
import { useState } from "react";

// import custom components
import About from "./components/About";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

// import assets
import Avatar from "./assets/images/avatar.jfif";

const App = () => {
  const [activeBtn, setActiveBtn] = useState("About");
  return (
    <div className="container pt-5">
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
          <div className="card w-100 rounded-3 shadow">
            <div className="card-body">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
