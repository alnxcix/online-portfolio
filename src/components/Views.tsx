// ** react imports **
import { lazy } from 'react';

// ** enums **
import ViewsEnums from '../enums/ViewsEnums';

// ** lazy load custom components **
const About = lazy(() => import('./main/About'));
const Education = lazy(() => import('./main/Education'));
const Experiences = lazy(() => import('./main/Experiences'));
const Projects = lazy(() => import('./main/Projects'));
const Skills = lazy(() => import('./main/Skills'));

// ================================================
const Views: Record<ViewsEnums, JSX.Element> = {
  [ViewsEnums.ABOUT]: <About />,
  [ViewsEnums.EDUCATION]: <Education />,
  [ViewsEnums.EXPERIENCES]: <Experiences />,
  [ViewsEnums.PROJECTS]: <Projects />,
  [ViewsEnums.SKILLS]: <Skills />,
};

export default Views;
