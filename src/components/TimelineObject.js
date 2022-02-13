const TimelineObject = (props) => {
  const { data } = props;
  return (
    <div className="d-flex align-items-center">
      <div className="dot" />
      <div className="border-start ms-2 w-100 ps-3">
        <div className="card my-2 rounded-3">
          <div className="card-body">
            <small className="font-monospace text-muted">
              {data.startingYear} -{" "}
              {data.isOngoing ? "Present" : data.endingYear} | {data.course}
            </small>
            <p>
              <strong>{data.school}</strong>
            </p>
            <p>
              <i className="fa-solid fa-location-dot" /> {data.location}{" "}
              <a
                className="badge btn rounded-pill shadow-none external-link"
                href={data.website}
                target="_blank"
              >
                Visit Website{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>{" "}
            </p>
            {data.awards.length > 0 ? (
              <>
                <hr />
                <small className="text-muted">
                  <strong>Awards:</strong>{" "}
                  {data.awards.map((e) => e).join(", ")}
                </small>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineObject;
