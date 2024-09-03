import { useParams } from 'react-router-dom';

import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useNewContentMutation } from 'app/api/contents.api.slice';

import { ICloseModal } from 'shared/ts/interfaces';

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").min(3, "Title to short").max(40, "Title too long"),
  description: yup.string().required("Description is required").min(5, "Description too short").max(80, "Description too long"),
  paragraph150: yup.string().required("This is required").max(150, "Too long"),
  paragraph300: yup.string().required("This is required").max(300, "Too long"),
  videoUrl: yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Please enter correct url"
  )
});

export default function AddContentForm({ setOpen }: ICloseModal) {
  const { id } = useParams<{ id: string }>();
  const [NewContent, { error, isLoading }] = useNewContentMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      paragraph150: "",
      paragraph300: "",
      videoUrl: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await NewContent({ topicId: id, values })
      setOpen(false)
    }
  })

  return (
    <Card sx={{ flex: 1 }} variant="plain">
      <Box>
        <Typography level="title-md">Add content</Typography>
        <Typography level="body-sm">
          Add new content for selected topic
        </Typography>
      </Box>
      <Divider />
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="column" gap={1}>
          <FormControl required>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && !!formik.errors.title}
            />
            {formik.touched.title ?
              <FormHelperText component="div">{formik.errors.title}</FormHelperText> : ""}
          </FormControl>
          <FormControl required>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && !!formik.errors.description}
            />
            {formik.touched.description ?
              <FormHelperText component="div">{formik.errors.description}</FormHelperText> : ""}
          </FormControl>
          <FormControl required>
            <FormLabel>First paragraph</FormLabel>
            <Textarea
              name="paragraph150"
              placeholder="First paragraph of text"
              value={formik.values.paragraph150}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              minRows={2}
              maxRows={4}
            />
            {formik.touched.paragraph150 ?
              <FormHelperText component="div">{formik.errors.paragraph150}</FormHelperText> : ""}
          </FormControl>
          <FormControl required>
            <FormLabel>Third paragraph</FormLabel>
            <Textarea
              name="paragraph300"
              placeholder="Another paragraph of text"
              value={formik.values.paragraph300}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              minRows={2}
              maxRows={4}
            />
            {formik.touched.paragraph300 ?
              <FormHelperText component="div">{formik.errors.paragraph300}</FormHelperText> : ""}
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
            {formik.touched.videoUrl ?
              <FormHelperText component="div">{formik.errors.videoUrl}</FormHelperText> : ""}
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
        </Stack>
      </form>
      {error ? "Something went wrong" : ""}
    </Card >
  )
}