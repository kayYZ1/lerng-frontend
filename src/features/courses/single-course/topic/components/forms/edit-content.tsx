import { useDispatch } from 'react-redux';

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

import { transformErrorResponse } from 'shared/lib/functions';
import WarningAlert from 'shared/components/alerts/warning';
import { Content } from 'shared/ts/types';

import { setActiveContent } from 'app/slice/contents.slice';
import { useEditContentMutation } from 'app/api/contents.api.slice';

const validationSchema = yup.object().shape({
  title: yup.string().min(3, "Title to short").max(40, "Title too long"),
  description: yup.string().min(5, "Description too short").max(80, "Description too long"),
  paragraph150: yup.string().max(150, "Too long"),
  paragraph300: yup.string().max(300, "Too long"),
  videoUrl: yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Please enter correct url"
  )
});

interface IEditContentFormProps {
  setOpen: (open: boolean) => void
  content: Content
}

export default function EditContentForm({ setOpen, content }: IEditContentFormProps) {
  const [EditContent, { isLoading, error }] = useEditContentMutation();
  const dispatch = useDispatch();

  const errorMessage = transformErrorResponse(error);

  const formik = useFormik({
    initialValues: {
      title: content.title,
      description: content.description,
      paragraph150: content.paragraph150,
      paragraph300: content.paragraph300,
      videoUrl: content.videoUrl
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const body = {
        title: values.title,
        description: values.description,
        paragraph150: values.paragraph150,
        paragraph300: values.paragraph300,
        videoUrl: values.videoUrl,
        contentId: content.id
      }
      await EditContent(body);
      dispatch(setActiveContent(values));
      setOpen(false);
    }
  })

  return (
    <Card sx={{ flex: 1, minWidth: { xs: 300, md: 600 } }} variant="plain">
      <Box>
        <Typography level="title-md">Edit content</Typography>
        <Typography level="body-sm">
          Edit content for this topic
        </Typography>
      </Box>
      <Divider />
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="column" gap={1}>
          <FormControl>
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
          <FormControl>
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
          <FormControl>
            <FormLabel>First paragraph</FormLabel>
            <Textarea
              name="paragraph150"
              value={formik.values.paragraph150}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              minRows={4}
              maxRows={8}
            />
            {formik.touched.paragraph150 ?
              <FormHelperText component="div">{formik.errors.paragraph150}</FormHelperText> : ""}
          </FormControl>
          <FormControl>
            <FormLabel>Third paragraph</FormLabel>
            <Textarea
              name="paragraph300"
              value={formik.values.paragraph300}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              minRows={6}
              maxRows={12}
            />
            {formik.touched.paragraph300 ?
              <FormHelperText component="div">{formik.errors.paragraph300}</FormHelperText> : ""}
          </FormControl>
          <FormControl>
            <FormLabel>Video</FormLabel>
            <Input
              type="text"
              name="videoUrl"
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
      {error && <WarningAlert type="Edit content error" message={errorMessage} />}
    </Card>
  )
}