// necessary imports
import { skills_high, skills_medium, skills_low } from "data/skills_data";
import ReactTooltip from "react-tooltip";

const Skills = () => (
  <>
    <ReactTooltip effect="solid" />
    <h2 className="fw-bold">
      💯 <span className="gradient">Proficient</span>
    </h2>
    <div className="ms-5">
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
      <hr />
    </div>
    <h2 className="fw-bold mb-3">
      👍 <span className="gradient">With Experience</span>
    </h2>
    <div className="ms-5">
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
      <hr />
    </div>
    <h2 className="fw-bold mb-3">
      ⏳ <span className="gradient">Currently Learning</span>
    </h2>
    <div className="ms-5">
      <p className="text-muted">Tools on their way to the lists above.</p>
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
  </>
);

export default Skills;
