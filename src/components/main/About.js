// necessary imports
import { about_links as links } from "data/about_links";
import { about_main as main } from "data/about_main";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lazy } from "react";

// lazy load components
const LinkComponent = lazy(() =>
  import("components/dynamic/AboutLinkComponent")
);
const DataComponent = lazy(() =>
  import("components/dynamic/AboutDataComponent")
);

const About = () => (
  <>
    <h2 className="fw-bold mb-3">
      🙋‍♂️ <span className="gradient">Hello there!</span>
    </h2>
    <div className="ms-5">
      <p>
        I'm <strong className="gradient">Roy Allen Nidoy</strong>, a
        Philippine-based IT student and an aspiring frontend developer. Need
        something? Contact me and we'll talk it out.
      </p>
      <hr />
      <div class="d-flex flex-wrap">
        {main.map((e, i) => (
          <DataComponent data={e} i={i} />
        ))}
      </div>
      <hr />
      <div>
        <p>
          <FontAwesomeIcon icon={faLink} /> Also, check out my other links:
        </p>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {links.map((e, i) => (
            <LinkComponent data={e} i={i} />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default About;
