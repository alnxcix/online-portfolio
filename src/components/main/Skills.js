import { skills_high, skills_medium, skills_low } from "data/skills_data";
import ReactTooltip from "react-tooltip";

const Skills = () => (
  <>
    <ReactTooltip effect="solid" />
    {skills_high.length === 0 ? null : (
      <div className="d-flex gap-3">
        <h2>💯</h2>
        <div className="flex-grow-1 border-bottom mb-3 pb-3">
          <h2 className="fw-bold gradient">Proficient</h2>
          <p className="text-muted">
            Languages, tools, and frameworks that I am most comfortable with.
          </p>
          {skills_high.map((e, i) => (
            <img
              alt=""
              className="mb-3 me-2"
              data-tip={e.label}
              height="50"
              key={i}
              src={e.logo}
            />
          ))}
        </div>
      </div>
    )}
    {skills_medium.length === 0 ? null : (
      <div className="d-flex gap-3">
        <h2>👍</h2>
        <div className="flex-grow-1">
          <h2 className="fw-bold gradient">With Experience</h2>
          <p className="text-muted">
            Languages and tools that I also work (or used to work) with.
          </p>
          {skills_medium.map((e, i) => (
            <img
              alt=""
              className="mb-3 me-2"
              data-tip={e.label}
              height="50"
              key={i}
              src={e.logo}
            />
          ))}
        </div>
      </div>
    )}
    {skills_low.length === 0 ? null : (
      <div className="d-flex gap-3">
        <h2>⏳</h2>
        <div className="flex-grow-1">
          <h2 className="fw-bold gradient">General Knowledge</h2>
          <p className="text-muted">
            Languages and tools that I have some knowledge of.
          </p>
          {skills_low.map((e, i) => (
            <img
              alt=""
              className="mb-3 me-3"
              data-tip={e.label}
              height="50"
              key={i}
              src={e.logo}
            />
          ))}
        </div>
      </div>
    )}
  </>
);

export default Skills;
