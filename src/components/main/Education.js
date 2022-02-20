// necessary imports
import { education_data as data } from "../../data/education_data";
import { lazy } from "react";

const TimelineComponent = lazy(() =>
  import("../dynamic/EducationTimelineComponent")
);

const Education = () => (
  <>
    <h2 className="fw-bold m-0">
      🎓 <span className="gradient">Education</span>
    </h2>
    <hr />
    {data.map((e, i) => (
      <TimelineComponent data={e} key={i} />
    ))}
  </>
);

export default Education;
