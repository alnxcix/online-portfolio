// necessary imports
import { skills_high, skills_medium, skills_low } from "data/skills_data";

const Skills = () => (
  <>
    <h2 className="fw-bold">
      💯 <span className="gradient">Proficient</span>
    </h2>
    <div className="ms-5">
      <p className="text-muted">
        Languages, tools, and frameworks that I am most comfortable with.
      </p>
      {skills_high.map((e, i) => (
        <span key={i}>
          <img alt="icon" className="mb-3" src={e} height="50" />{" "}
        </span>
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
        <span key={i}>
          <img alt="icon" className="mb-3" src={e} height="50" />{" "}
        </span>
      ))}
      <hr />
    </div>
    <h2 className="fw-bold mb-3">
      ⏳ <span className="gradient">Currently Learning</span>
    </h2>
    <div className="ms-5">
      <p className="text-muted">Tools on their way to the lists above.</p>
      {skills_low.map((e, i) => (
        <span key={i}>
          <img alt="icon" className="mb-3" src={e} height="50" />{" "}
        </span>
      ))}
    </div>
  </>
);

export default Skills;
