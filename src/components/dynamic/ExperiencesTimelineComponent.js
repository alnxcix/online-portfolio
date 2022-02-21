// necessary imports
import { faExternalLink, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperiencesTimelineComponent = ({ data }) => (
  <div className="d-flex align-items-center">
    <div className="dot" />
    <div className="border-start ms-2 w-100 ps-3">
      <div className="card my-2 rounded-3 shadow">
        <div className="card-body d-flex">
          <img
            className="align-self-center me-3 rounded-circle shadow"
            src={data.logo}
            height="75"
            width="75"
          />
          <div>
            <small className="font-monospace text-muted">
              {data.startingDate} -{" "}
              {data.isOngoing ? "Present" : data.endingDate} | {data.position}
            </small>
            <p>
              <strong>{data.company}</strong>{" "}
              <small>
                <a
                  className="badge btn rounded-pill shadow-none external-link"
                  href={data.website}
                  target="_blank"
                >
                  Visit Website <FontAwesomeIcon icon={faExternalLink} />
                </a>
              </small>
            </p>
            <small>
              <FontAwesomeIcon icon={faLocation} /> {data.location}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExperiencesTimelineComponent;
