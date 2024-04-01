import { useSelector } from "react-redux";
import { selectStepToRender } from "features/courses/course-stepper.slice";
import { StepIndex } from "shared/enum";

import CreateCourseForm from "./create-course.form";
import CreateModuleForm from "./create-module.form";
import CreateContentForm from "./create-content.form";

export default function RenderCourseForm() {
  const activeStep = useSelector(selectStepToRender);
  let render: JSX.Element;

  switch (activeStep) {
    case (StepIndex.CREATE_COURSE):
      render = <CreateCourseForm />
      break
    case (StepIndex.ADD_LEARNING_MODULES):
      render = <CreateModuleForm />
      break
    case (StepIndex.CREATE_MODULE_CONTENTS):
      render = <CreateContentForm />
  }

  return render;
}