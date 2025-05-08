// ** icons **
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ** types **
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
type AboutLinkComponentPropType = {
  data: {
    icon: IconProp;
    title: string;
    value: string;
  };
};

// ===================================================================
const AboutLinkComponent = ({ data }: AboutLinkComponentPropType) => (
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
