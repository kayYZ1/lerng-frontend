import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import { FormControl, Input, FormLabel, Card, Typography, Box } from '@mui/joy';
import { useDispatch } from 'react-redux';

import AddImage from '../add-image';
import { setActiveStep } from 'features/courses/course-stepper.slice';
import { StepIndex } from 'shared/enum';

export default function CreateCourseForm() {
  const dispatch = useDispatch();

  return (
    <Card sx={{ flex: 1 }}>
      <Box>
        <Typography level="title-md">Course creation</Typography>
        <Typography level="body-sm">
          Create course here
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
            <AddImage />
          </FormControl>
          <CardOverflow>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined">
                Cancel
              </Button>
              <Button size="sm" variant="solid" onClick={() => dispatch(setActiveStep(StepIndex.ADD_LEARNING_MODULES))}>
                Next
              </Button>
            </CardActions>
          </CardOverflow>
        </form>
      </Stack>
    </Card>
  )
}