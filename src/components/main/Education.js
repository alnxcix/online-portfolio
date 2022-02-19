import { education_data as data } from "../../data/education_data";
import { lazy, Suspense } from "react";

const TimelineComponent = lazy(() =>
  import("../dynamic/EducationTimelineComponent")
);

const Education = () => (
  <>
    <h2 className="fw-bold m-0">
      🎓 <span className="gradient">Education</span>
    </h2>
    <hr />
    <Suspense fallback={<div className="spinner-border" />}>
      {data.map((e, i) => (
        <TimelineComponent data={e} key={i} />
      ))}
    </Suspense>
  </>
);

export default Education;
