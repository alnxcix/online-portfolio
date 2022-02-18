const otherLinks = [
  {
    title: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    link: "https://linkedin.com/in/alnxcix",
  },
  {
    title: "GitHub",
    icon: "fa-brands fa-github",
    link: "https://github.com/alnxcix",
  },
  { title: "Resume", icon: "fa-solid fa-file-lines", link: "/resume.pdf" },
];

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
        (+63) 908 739 7998
      </p>
      <hr />
      <div style={{ color: "#14213D" }}>
        <p className="lead">
          <i className="fa-solid fa-link" /> Also, check out my other links:
        </p>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {otherLinks.map((e, i) => (
            <div className="col" key={i}>
              <a
                class="btn btn-outline-secondary w-100 rounded-pill shadow-none"
                href={e.link}
                role="button"
                target="_blank"
                type="button"
              >
                <i className={e.icon} /> {e.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default About;
