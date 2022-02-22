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
            className="me-3 rounded-circle shadow"
            src={data.logo}
            height="75"
            width="75"
          />
          <div className="w-100">
            <div className="d-flex mb-1 justify-content-between">
              <small className="font-monospace text-muted">
                {data.startingDate} -{" "}
                {data.isOngoing ? "Present" : data.endingDate} | {data.position}
              </small>
              <small>
                <a
                  className="badge btn rounded-pill shadow-none external-link"
                  href={data.website}
                  target="_blank"
                >
                  Visit Website <FontAwesomeIcon icon={faExternalLink} />
                </a>
              </small>
            </div>
            <div className="mb-1">
              <strong>{data.company}</strong>{" "}
            </div>
            <small className="text-muted">
              <FontAwesomeIcon icon={faLocation} /> {data.location}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExperiencesTimelineComponent;
