const AboutDataComponent = ({ data }) => (
  <div>
    <small className="fw-bold gradient">{data.label}</small>
    <p>
      {data.value} <small className="text-muted">{data.smallValue}</small>
    </p>
  </div>
);

export default AboutDataComponent;
