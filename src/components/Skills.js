const Skills = () => (
  <>
    <h2 className="fw-bold">
      👌 <span className="gradient">Proficient</span>
    </h2>
    <div className="ms-5">
      <p className="text-muted">
        Languages, tools, and frameworks that I am most comfortable with.
      </p>
      {["fa-html5", "fa-bootstrap", "fa-js", "fa-react", "fa-npm"].map((e) => (
        <i className={`custom-icon fa-brands ${e} fa-3x me-4`} />
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
      {[
        "fa-java",
        "fa-css3",
        "fa-github",
        "fa-node",
        "fa-android",
        "fa-python",
        "fa-php",
      ].map((e) => (
        <i className={`custom-icon fa-brands ${e} fa-3x me-4`} />
      ))}
      <hr />
    </div>
    <h2 className="fw-bold mb-3">
      ⏳ <span className="gradient">Currently Learning</span>
    </h2>
    <div className="ms-5">
      <p className="text-muted">Tools on their way to the lists above.</p>
      <i className="custom-icon fa-brands fa-aws fa-3x me-4" />
    </div>
  </>
);

export default Skills;
