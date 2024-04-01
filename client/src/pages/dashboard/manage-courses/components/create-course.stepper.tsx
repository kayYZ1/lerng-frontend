import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepButton from '@mui/joy/StepButton';
import StepIndicator from '@mui/joy/StepIndicator';
import Check from '@mui/icons-material/Check';

const steps = ['Create course', 'Add learning modules', 'Create module contents'];

export default function CreateCourseStepper() {
  const [activeStep, setActiveStep] = React.useState(1); // Going into redux
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
          <StepButton onClick={() => setActiveStep(index)}>{step}</StepButton>
        </Step>
      ))}
    </Stepper>
  );
}