import { useParams } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Sheet from "@mui/joy/Sheet"
import { FormControl, Input, FormLabel, Card, Typography, Box } from '@mui/joy';
import { useFormik } from 'formik';

import { useAddTopicMutation } from 'app/topics/topics.api.slice';

import { ICloseModal } from 'shared/ts/interfaces';

export default function AddTopicForm({ setOpen }: ICloseModal) {
  const { id } = useParams<{ id: string }>();
  const [AddTopic, { isLoading, error }] = useAddTopicMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: async (values) => {
      await AddTopic({ courseId: id, values });
      setOpen(false)
    }
  })

  return (
    <Sheet sx={{
      width: "45vh"
    }}>
      <Card sx={{ flex: 1 }}>
        <Box>
          <Typography level="title-md">Add topic</Typography>
          <Typography level="body-sm">
            Add a new topic to the course
          </Typography>
        </Box>
        <Divider />
        <Stack sx={{ my: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            <FormControl required>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            <FormControl required>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            <CardOverflow>
              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button size="sm" variant="outlined" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" variant="solid" type="submit" loading={isLoading}>
                  Save
                </Button>
              </CardActions>
            </CardOverflow>
          </form>
          {error ? "Something went wrong" : ""}
        </Stack>
      </Card>
    </Sheet>
  )
}