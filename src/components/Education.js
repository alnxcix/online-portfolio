import { lazy, Suspense } from "react";

const TimelineObject = lazy(() => import("./TimelineObject"));

const timelineData = [
  {
    startingYear: 2018,
    endingYear: 0,
    isOngoing: true,
    school:
      "University of Santo Tomas - College of Information and Computing Sciences",
    location: "Manila, Philippines",
    website: "https://www.ust.edu.ph/information-and-computing-sciences/",
    course: "Bachelor of Science in Information Technology",
    awards: [
      "PHILNITS Passer 2021",
      "Dean's Lister (From A.Y. 2019 - 2020 1st Sem to A.Y. 2021 - 2022 1st Sem)",
    ],
  },
  {
    startingYear: 2016,
    endingYear: 2018,
    isOngoing: false,
    school:
      "Don Mariano Marcos Memorial State University - South La Union Campus",
    location: "La Union, Philippines",
    website: "https://www.dmmmsu.edu.ph/category/sluc/",
    course: "Senior High School (STEM)",
    awards: ["With Honors"],
  },
  {
    startingYear: 2012,
    endingYear: 2016,
    isOngoing: false,
    school:
      "Don Mariano Marcos Memorial State University - South La Union Campus",
    location: "La Union, Philippines",
    website: "https://www.dmmmsu.edu.ph/category/sluc/",
    course: "Junior High School",
    awards: [
      "Exemplary Performance in NCAE",
      "Journalism Award",
      "With Honors",
    ],
  },
];

const Education = () => (
  <>
    <h2 className="fw-bold m-0">
      🎓 <span className="gradient">Education</span>
    </h2>
    <hr />
    <Suspense fallback={<div className="spinner-border" />}>
      {timelineData.map((e, i) => (
        <TimelineObject data={e} key={i} />
      ))}
    </Suspense>
  </>
);

export default Education;
