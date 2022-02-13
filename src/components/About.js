const About = () => (
  <>
    <h2 className="fw-bold mb-3">
      🙋‍♂️ <span className="gradient">Hello there!</span>
    </h2>
    <div className="ms-5">
      <p style={{ color: "#14213D" }}>
        My name is <strong>Roy Allen Nidoy</strong>, a full-time IT student and
        frontend developer from the Philippines. Need something? Contact me and
        we'll talk it out.
      </p>
      <hr />
      <p style={{ color: "#14213D" }}>
        <span
          className="badge rounded-pill"
          style={{ backgroundColor: "#FCA311" }}
        >
          <i className="fa-solid fa-location-dot" /> LOCATION
        </span>{" "}
        Sampaloc, Manila
      </p>
      <p style={{ color: "#14213D" }}>
        <span
          className="badge rounded-pill"
          style={{ backgroundColor: "#FCA311" }}
        >
          <i className="fa-solid fa-envelope" /> EMAIL
        </span>{" "}
        royallen.nidoy.iics@ust.edu.ph | allen.1120@icloud.com
      </p>
      <p style={{ color: "#14213D" }}>
        <span
          className="badge rounded-pill"
          style={{ backgroundColor: "#FCA311" }}
        >
          <i className="fa-solid fa-phone" /> MOBILE
        </span>{" "}
        +63 908 739 7998
      </p>
      <hr />
      <div style={{ color: "#14213D" }}>
        <p className="lead">
          <i className="fa-solid fa-link" /> Also, check out my other links:
        </p>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <div className="card rounded-pill">
              <div className="card-body">
                <h6 className="card-title d-flex justify-content-between m-0">
                  <div>
                    <i className="fa-brands fa-linkedin" /> LinkedIn
                  </div>
                  <div>
                    <a
                      href="https://linkedin.com/in/alnxcix"
                      className="link-secondary"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </div>
                </h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-pill">
              <div className="card-body">
                <h6 className="card-title d-flex justify-content-between m-0">
                  <div>
                    <i className="fa-brands fa-github" /> GitHub
                  </div>
                  <div>
                    <a
                      href="https://github.com/alnxcix"
                      className="link-secondary"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </div>
                </h6>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-pill">
              <div className="card-body">
                <h6 className="card-title d-flex justify-content-between m-0">
                  <div>
                    <i className="fa-solid fa-file-lines" /> My resume
                  </div>
                  <div>
                    <a
                      href="resume.pdf"
                      className="link-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;
