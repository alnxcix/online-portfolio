// ** react imports **
import { lazy } from 'react';

// ** enums **
import ViewsEnums from '../enums/ViewsEnums';

// ** lazy load custom components **
const About = lazy(() => import('./About'));
const Education = lazy(() => import('./Education'));
const Experiences = lazy(() => import('./Experiences'));
const Projects = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));

// ================================================
const Views: Record<ViewsEnums, JSX.Element> = {
  [ViewsEnums.ABOUT]: <About />,
  [ViewsEnums.EDUCATION]: <Education />,
  [ViewsEnums.EXPERIENCES]: <Experiences />,
  [ViewsEnums.PROJECTS]: <Projects />,
  [ViewsEnums.SKILLS]: <Skills />,
};

export default Views;
