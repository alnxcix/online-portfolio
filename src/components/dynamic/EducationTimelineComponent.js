import { faExternalLink, faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EducationTimelineComponent = ({ data }) => (
  <div className="d-flex align-items-center">
    <div className="dot" />
    <div className="border-start ms-2 w-100 ps-3">
      <div className="card my-2 rounded-3 shadow">
        <div className="card-body">
          <small className="font-monospace text-muted">
            {data.startingYear} - {data.isOngoing ? "Present" : data.endingYear}{" "}
            | {data.course}
          </small>
          <p>
            <strong>{data.school}</strong>{" "}
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
          {data.awards.length > 0 ? (
            <>
              <hr />
              <small className="text-muted">
                <strong>Awards:</strong> {data.awards.map((e) => e).join(", ")}
              </small>
            </>
          ) : null}
        </div>
      </div>
    </div>
  </div>
);

export default EducationTimelineComponent;
