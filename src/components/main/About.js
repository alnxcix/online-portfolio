import { lazy } from "react";
import { about_links as links } from "data/about_links";
import { about_main as main } from "data/about_main";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataComponent = lazy(() =>
  import("components/dynamic/AboutDataComponent")
);
const LinkComponent = lazy(() =>
  import("components/dynamic/AboutLinkComponent")
);

const About = () => (
  <>
    <h2 className="fw-bold mb-3">
      🙋‍♂️ <span className="gradient">Hello there!</span>
    </h2>
    <div className="ms-5">
      <p>
        I'm <strong className="gradient">Roy Allen Nidoy</strong>, a software
        engineer based in Manila, Philippines. I mostly do Frontend stuffs, so
        if you need help with that, you can contact me and we can discuss it.
      </p>
      <p>
        My other hobbies? I like consuming media, especially fictional novels
        and video games.
      </p>
      <hr />
      <div className="d-flex flex-wrap">
        {main.map((e, i) => (
          <DataComponent data={e} key={i} />
        ))}
      </div>
      <hr />
      <div>
        <p>
          <FontAwesomeIcon icon={faLink} /> Also, check out my other links:
        </p>
        <div className="row row-cols-2 g-3">
          {links.map((e, i) => (
            <LinkComponent data={e} key={i} />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default About;
