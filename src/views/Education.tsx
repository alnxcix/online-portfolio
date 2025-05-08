// ** react imports **
import { lazy } from 'react';

// ** data **
import { education_data as data } from 'data/education_data';

// ** lazy load custom components **
const TimelineComponent = lazy(
  () => import('components/EducationTimelineComponent')
);

// ======================
const Education = () => (
  <>
    <div className="d-flex gap-3">
      <h2>🎓</h2>
      <h2 className="fw-bold gradient">Education</h2>
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

export default Education;
