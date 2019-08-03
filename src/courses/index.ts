import { ComponentClass, FunctionComponent } from "react";
import gettingStarted from "./gettingStarted";
import workInProgress from "./workInProgress";
import { StepDescription } from "screens/Course/types";
import createCourse from "screens/Course/create";

interface CourseDefinitionInput {
  id: string;
  name: string;
  steps: StepDescription[];
}

export interface CourseDefinition {
  id: string;
  name: string;
  steps: StepDescription[];
  screen: ComponentClass<any> | FunctionComponent<any>;
}

const createDefinition = ({
  id,
  name,
  steps,
}: CourseDefinitionInput): CourseDefinition => ({
  id,
  name,
  steps,
  screen: createCourse({
    steps,
  }),
});

const courses = [
  createDefinition({
    id: 'getting-started',
    name: 'Getting Started',
    steps: gettingStarted,
  }),
  createDefinition({
    id: 'creating-transporters',
    name: 'Working with transporters 🏗',
    steps: workInProgress,
  }),
  createDefinition({
    id: 'setting-rules',
    name: 'Setting rules 🏗',
    steps: workInProgress,
  }),
  createDefinition({
    id: 'creating-rules',
    name: 'Writing your own rules 🏗',
    steps: workInProgress,
  }),
];

export default courses;
