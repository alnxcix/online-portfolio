// necessary imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutLinkComponent = ({ data }) => (
  <div className="col">
    <a
      className="btn rounded-pill shadow-none external-link w-100"
      href={data.value}
      role="button"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={data.icon} /> {data.title}
    </a>
  </div>
);

export default AboutLinkComponent;
