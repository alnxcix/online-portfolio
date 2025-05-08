import { lazy } from 'react';
import { experiences_data as data } from 'data/experiences_data';

const TimelineComponent = lazy(
  () => import('components/dynamic/ExperiencesTimelineComponent')
);

const Experiences = () => (
  <>
    <div className="d-flex gap-3">
      <h2>😎</h2>
      <h2 className="fw-bold gradient">Experiences</h2>
    </div>
    {data.map((e, i) => (
      <TimelineComponent
        data={e}
        isLast={data.length === i + 1}
        isMany={data.length > 1}
        key={i}
      />
    ))}
  </>
);

export default Experiences;
