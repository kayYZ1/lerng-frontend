import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import { FormControl, Input, FormLabel, Card, Typography, Box } from '@mui/joy';

import { useDispatch } from 'react-redux';
import { setActiveStep } from 'app/courses/course-stepper.slice';
import { StepIndex } from 'shared/enum';

export default function CreateModuleForm() {
  const dispatch = useDispatch();

  return (
    <Card sx={{ flex: 1 }}>
      <Box>
        <Typography level="title-md">Module creation</Typography>
        <Typography level="body-sm">
          Create course modules here
        </Typography>
      </Box>
      <Divider />
      <Stack sx={{ my: 1 }}>
        <form>
          <FormControl required>
            <FormLabel>Course name</FormLabel>
            <Input
              type="text"
              name="name"
            />
          </FormControl>
          <FormControl required>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
            />
          </FormControl>
          <FormControl required>
            <FormLabel>Image</FormLabel>
            <Input
              type="text"
              name="imageUrl"
            />
          </FormControl>
          <CardOverflow>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined">
                Cancel
              </Button>
              <Button size="sm" variant="plain" onClick={() => dispatch(setActiveStep(StepIndex.CREATE_COURSE))}>
                Previous
              </Button>
              <Button size="sm" variant="solid" onClick={() => dispatch(setActiveStep(StepIndex.CREATE_MODULE_CONTENTS))}>
                Next
              </Button>
            </CardActions>
          </CardOverflow>
        </form>
      </Stack>
    </Card>
  )
}