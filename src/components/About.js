import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { me } from "../data/me";
import { otherLinks } from "../data/otherLinks";

const About = () => (
  <>
    <h2 className="fw-bold mb-3">
      🙋‍♂️ <span className="gradient">Hello there!</span>
    </h2>
    <div className="ms-5">
      <p>{me.generateDescription()}</p>
      <hr />
      <div class="d-flex flex-wrap">
        {[
          {
            label: "LOCATION",
            value: me.location,
          },
          {
            label: "EMAIL",
            value: me.email,
          },
          {
            label: "MOBILE",
            value: me.mobile,
          },
          {
            label: "RELIGIOUS AFFILIATION",
            value: me.religiousAffiliation,
          },
          {
            label: "GENDER",
            value: me.gender,
            smallValue: me.pronouns.join("/"),
          },
          {
            label: "BIRTHDATE",
            value: `${me.birthdate} ${me.starSign}`,
          },
        ].map((e, i) => (
          <div key={i} className="w-50">
            <small className="fw-bold" style={{ color: "#FCA311" }}>
              {e.label}
            </small>
            <p>
              {e.value} <small className="text-muted">{e.smallValue}</small>
            </p>
          </div>
        ))}
      </div>
      <hr />
      <div>
        <p>
          <FontAwesomeIcon icon={faLink} /> Also, check out my other links:
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
                <FontAwesomeIcon icon={e.icon} /> {e.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default About;
