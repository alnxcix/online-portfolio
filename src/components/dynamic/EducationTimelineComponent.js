import { faExternalLink, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EducationTimelineComponent = ({ data, isLast, isMany }) => (
  <>
    <div className="d-flex align-items-center">
      <div className="dot" />
      <div
        className={`${isMany ? 'border-start ms-2 ps-3 w-100' : null} w-100`}
      >
        <div className="card rounded-3 shadow">
          <div className="card-body d-flex">
            <img
              alt=""
              className="me-3 rounded-circle shadow"
              src={data.logo}
              height="75"
              width="75"
            />
            <div className="w-100">
              <div className="d-flex mb-1 justify-content-between">
                <small className="font-monospace text-muted">
                  {data.startingYear} -{' '}
                  {data.endingYear === null ? 'Present' : data.endingYear} |{' '}
                  {data.course}
                </small>
                <small>
                  <a
                    className="badge btn rounded-pill shadow-none external-link"
                    href={data.website}
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More <FontAwesomeIcon icon={faExternalLink} />
                  </a>
                </small>
              </div>
              <div className="mb-1">
                <strong>{data.school}</strong>
              </div>
              <small className="text-muted">
                <FontAwesomeIcon icon={faLocation} /> {data.location}
              </small>
              {data.achievements.length > 0 ? (
                <>
                  <hr />
                  <small className="text-muted">
                    <strong>Achievements:</strong>{' '}
                    {data.achievements.map((e) => e).join(', ')}
                  </small>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
    {isMany && !isLast ? <div className="border-start w-100 ms-2 p-2" /> : null}
  </>
);

export default EducationTimelineComponent;
