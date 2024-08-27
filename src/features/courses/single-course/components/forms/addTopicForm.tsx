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

import { useFormik } from 'formik';
import * as yup from "yup";

import { useAddTopicMutation } from 'app/api/topics.api.slice';

import { ICloseModal } from 'shared/ts/interfaces';
import { transformErrorResponse } from 'shared/lib/functions';
import WarningAlert from 'shared/components/warningAlert';

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").min(3, "Title to short").max(40, "Title too long"),
  description: yup.string().required("Description is required").min(5, "Description too short").max(80, "Description too long"),
});

export default function AddTopicForm({ setOpen }: ICloseModal) {
  const { id } = useParams<{ id: string }>();
  const [AddTopic, { isLoading, error }] = useAddTopicMutation();

  const errorResponse = transformErrorResponse(error);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await AddTopic({ courseId: id, values });
      if (!errorResponse) setOpen(false);
      setOpen(false);
    }
  })

  return (
    <Card sx={{ flex: 1 }} variant='plain'>
      <Box>
        <Typography level="title-md">Add topic</Typography>
        <Typography level="body-sm">
          Add a new topic to the course
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
      {error ? <WarningAlert type="Topic creation error" message={errorResponse} /> : ""}
    </Card>
  )
}