// necessary imports
import { experiences_data as data } from "data/experiences_data";
import { lazy } from "react";

const TimelineComponent = lazy(() =>
  import("components/dynamic/ExperiencesTimelineComponent")
);

const Experiences = () => (
  <>
    <h2 className="fw-bold m-0 mb-3">
      😎 <span className="gradient">Experiences</span>
    </h2>
    {data.map((e, i) => (
      <TimelineComponent data={e} key={i} />
    ))}
  </>
);

export default Experiences;
