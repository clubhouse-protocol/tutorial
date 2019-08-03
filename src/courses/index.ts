import { ComponentClass, FunctionComponent } from "react";
import GettingStarted from "./GettingStarted";
import { OuterProps } from "components/Course/types";


interface CourseDefinition {
  id: string;
  name: string;
  screen: ComponentClass<OuterProps> | FunctionComponent<OuterProps>
}

const courses: CourseDefinition[] = [{
  id: 'getting-started',
  name: 'Getting Started',
  screen: GettingStarted,
}];

export default courses;
