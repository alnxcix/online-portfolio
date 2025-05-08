// ** react imports **
import { lazy } from 'react';

// ** data **
import { about_links as links } from 'data/about_links';
import { about_main as main } from 'data/about_main';

// ** icons **
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ** lazy load custom components **
const DataComponent = lazy(() => import('components/AboutDataComponent'));
const LinkComponent = lazy(() => import('components/AboutLinkComponent'));

// ==================
const About = () => (
  <>
    <div className="d-flex gap-3">
      <h2>🙋‍♂️</h2>
      <div>
        <h2 className="fw-bold gradient">Hello there!</h2>
        <p>
          I'm <strong className="gradient">Roy Allen Nidoy</strong>, a software
          engineer based in Manila, Philippines. I mostly do Frontend stuff
          using React, so if you need help with that, you can contact me and we
          can discuss it.
        </p>
        <p>
          Outside of coding, I entertain myself by taking walks outside, going
          to cafés, playing video games, reading fiction novels, or watching
          films.
        </p>
        <hr />
        <div className="row row-cols-1 row-cols-lg-2 g-3">
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
    </div>
  </>
);

export default About;
