import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepButton from '@mui/joy/StepButton';
import StepIndicator from '@mui/joy/StepIndicator';
import Check from '@mui/icons-material/Check';

import { useDispatch, useSelector } from 'react-redux';
import { selectActiveStep, setActiveStep } from 'features/courses/course-stepper.slice';
import { StepIndex } from 'shared/enum';

export default function CreateCourseStepper() {
  const activeStep = useSelector(selectActiveStep);
  const dispatch = useDispatch()

  const steps = Object.values(StepIndex);

  return (
    <Stepper sx={{ width: '100%' }}>
      {steps.map((step, index) => (
        <Step
          key={step}
          indicator={
            <StepIndicator
              variant={activeStep <= index ? 'soft' : 'solid'}
              color={activeStep < index ? 'neutral' : 'primary'}
            >
              {activeStep <= index ? index + 1 : <Check />}
            </StepIndicator>
          }
          sx={{
            '&::after': {
              ...(activeStep > index &&
                index !== 2 && { bgcolor: 'primary.solidBg' }),
            },
          }}
        >
          <StepButton onClick={() => dispatch(setActiveStep(step))}>{step}</StepButton>
        </Step>
      ))}
    </Stepper>
  );
}