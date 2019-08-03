import { StepDescription } from "./types";
import { useState } from "react";

const getCacheId = (courseId: string, step: StepDescription) => `completed_${courseId}_${step.id}`;

type ExtendedStep = StepDescription & {
  completed: boolean;
  index: number;
}

export const getWithStatus = (courseId: string, steps: StepDescription[]) => {
  const withStatus = steps.map<ExtendedStep>((step, index) => {
    return {
      ...step,
      completed: !!localStorage.getItem(getCacheId(courseId, step)),
      index,
    }
  });

  return withStatus;
}

export const getCurrent = (courseId: string, steps: StepDescription[]) =>
  getWithStatus(courseId, steps).filter(step => !step.completed)[0];

export const resetPrevious = (courseId: string, step: ExtendedStep, steps: StepDescription[]) => {
  const previousStep = steps[step.index - 1];
  localStorage.removeItem(getCacheId(courseId, previousStep));
}

export const markComplete = (courseId: string, step: StepDescription) => {
  localStorage.setItem(getCacheId(courseId, step), 'true');
}

export const getRemaining = (courseId: string, steps: StepDescription[]) =>
  getWithStatus(courseId, steps).filter(step => !step.completed).length;

export const useSteps = (courseId: string, steps: StepDescription[]) => {
  const [current, setCurrent] = useState(getCurrent(courseId, steps));
  const [withStatus, setWithStatus] = useState(getWithStatus(courseId, steps));
  const complete = () => {
    markComplete(courseId, current);
    setCurrent(getCurrent(courseId, steps));
    setWithStatus(getWithStatus(courseId, steps));
  };
  const back = () => {
    resetPrevious(courseId, current, steps);
    setCurrent(getCurrent(courseId, steps));
    setWithStatus(getWithStatus(courseId, steps));
  };
  return {
    complete,
    current,
    back,
    withStatus,
    hasPrevious: current.index > 0,
  };
}