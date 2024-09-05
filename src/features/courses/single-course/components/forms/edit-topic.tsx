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

import { useFormik } from 'formik';
import * as yup from "yup";

import { useEditTopicMutation } from "app/api/topics.api.slice";
import { Topic } from 'shared/ts/types';

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").min(3, "Title to short").max(40, "Title too long"),
  description: yup.string().required("Description is required").min(5, "Description too short").max(80, "Description too long"),
});

interface IEditTopicFormProps {
  setOpen: (value: boolean) => void
  topic: Topic
}

export default function EditTopicForm({ setOpen, topic }: IEditTopicFormProps) {
  const [EditTopic, { isLoading }] = useEditTopicMutation();

  const formik = useFormik({
    initialValues: {
      title: topic.title,
      description: topic.description,
    },
    validationSchema,
    onSubmit: async (values) => {
      const body = {
        title: values.title,
        description: values.description,
        topicId: topic.id
      }
      await EditTopic(body);
      setOpen(false);
    }
  })

  return (
    <Card sx={{ flex: 1 }} variant='plain'>
      <Box>
        <Typography level="title-md">Edit topic</Typography>
        <Typography level="body-sm">
          Edit information about this topic
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
            />
            {formik.touched.description ?
              <FormHelperText component="div">{formik.errors.description}</FormHelperText> : ""}
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
    </Card>
  )
}