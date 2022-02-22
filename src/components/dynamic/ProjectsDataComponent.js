const ProjectsDataComponent = ({ data }) => (
  <div className="col">
    <div className="card rounded shadow">
      <div className="card-body">
        <div className="d-flex">
          <img
            alt=""
            className="align-self-center me-3 rounded-circle shadow"
            src={data.logo}
            height="60"
            width="60"
          />
          <div>
            <small className="font-monospace text-muted">
              {data.startingDate} -{" "}
              {data.endingDate === null ? "Present" : data.endingDate}
            </small>
            <h6 className="card-title">{data.title}</h6>
          </div>
        </div>
        <hr />
        <small className="text-muted">{data.description}</small>
        <div className="mt-3">
          {data.technologyUsed.map((e) => (
            <span className="badge border border-dark rounded-pill bg-light text-dark me-1">
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsDataComponent;
