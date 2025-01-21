import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectsDataComponent = ({ data }) => (
  <div className="col">
    <div className="card rounded shadow">
      <div className="card-body">
        <div className="d-flex">
          {data.logo ? (
            <img
              alt=""
              className="me-3 rounded-circle shadow"
              src={data.logo}
              height="60"
              width="60"
            />
          ) : null}
          <div className="flex-grow-1 d-flex">
            <div className="flex-grow-1">
              <div className="mb-1">
                <small className="font-monospace text-muted">
                  {data.startingDate === null || data.endingDate === null
                    ? null
                    : data.endingDate === undefined
                    ? data.startingDate
                    : `${data.startingDate} - ${data.endingDate}`}
                </small>
              </div>
              <div className="align-items-center d-flex justify-content-between mb-1">
                <strong>{data.title}</strong>
              </div>
            </div>
            <div>
              {data.link ? (
                <a
                  className="badge btn shadow-none external-link rounded-pill"
                  href={data.link}
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open <FontAwesomeIcon icon={faExternalLink} />
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <hr />
        <small className="text-muted">{data.description}</small>
        <div className="mt-3">
          {data.tags.map((e) => (
            <span className="badge border border-dark rounded-pill bg-light text-dark mb-1 me-1">
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsDataComponent;
