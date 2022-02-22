// necessary imports
import { education_data as data } from "data/education_data";
import { lazy } from "react";

const TimelineComponent = lazy(() =>
  import("components/dynamic/EducationTimelineComponent")
);

const Education = () => (
  <>
    <h2 className="fw-bold m-0 mb-3">
      🎓 <span className="gradient">Education</span>
    </h2>
    {data.map((e, i) => (
      <TimelineComponent data={e} key={i} />
    ))}
  </>
);

export default Education;
