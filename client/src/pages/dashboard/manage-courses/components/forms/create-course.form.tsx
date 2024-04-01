import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import { FormControl, Input, FormLabel, Card, Typography, Box } from '@mui/joy';

export default function CreateCourseForm() {
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
              <Button size="sm" variant="solid" type="submit">
                Next
              </Button>
            </CardActions>
          </CardOverflow>
        </form>
      </Stack>
    </Card>
  )
}