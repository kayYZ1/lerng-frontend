import { useParams } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Sheet from "@mui/joy/Sheet"
import { FormControl, Input, FormLabel, Card, Typography, Box, Textarea } from '@mui/joy';
import { useFormik } from 'formik';

import { useNewContentMutation } from 'app/contents/contents.api.slice';

import { ICloseModal } from 'shared/ts/interfaces';

export default function AddContentForm({ setOpen }: ICloseModal) {
  const { id } = useParams<{ id: string }>();
  const [NewContent, { error, isLoading }] = useNewContentMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      paragraph500: "",
      paragraph750: "",
      paragraph300: "",
      imageUrl: "",
      videoUrl: ""
    },
    onSubmit: async (values) => {
      await NewContent({ topicId: id, values })
      setOpen(false)
    }
  })

  return (
    <Sheet sx={{
      width: "45vh"
    }}>
      <Card sx={{ flex: 1 }}>
        <Box>
          <Typography level="title-md">Add content</Typography>
          <Typography level="body-sm">
            Add new content for selected topic
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
            <FormControl required>
              <FormLabel>First paragraph</FormLabel>
              <Textarea
                name="paragraph500"
                placeholder="Introduction to this lesson..."
                value={formik.values.paragraph500}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                minRows={2}
                maxRows={4}
              />
            </FormControl>
            <FormControl required>
              <FormLabel>Second paragraph</FormLabel>
              <Textarea
                name="paragraph750"
                placeholder="Main clue..."
                value={formik.values.paragraph750}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                minRows={2}
                maxRows={4}
              />
            </FormControl>
            <FormControl required>
              <FormLabel>Third paragraph</FormLabel>
              <Textarea
                name="paragraph300"
                placeholder="Ending..."
                value={formik.values.paragraph300}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                minRows={2}
                maxRows={4}
              />
            </FormControl>
            <FormControl required>
              <FormLabel>Image</FormLabel>
              <Input
                type="text"
                name="imageUrl"
                placeholder="For now image url.."
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </FormControl>
            <FormControl required>
              <FormLabel>Video</FormLabel>
              <Input
                type="text"
                name="videoUrl"
                placeholder="Link to your recorded video on youtube, etc.."
                value={formik.values.videoUrl}
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
    </Sheet >
  )
}