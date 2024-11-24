import { useFormik } from 'formik';
import * as yup from 'yup';

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
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';

import { Instructor } from 'shared/ts/types';
import { ICloseModal } from 'shared/ts/interfaces';

interface ISendEmail extends ICloseModal {
  instructor: Instructor;
}

const validationSchema = yup.object().shape({
  topic: yup
    .string()
    .required('Topic is required')
    .min(3, 'Topic to short')
    .max(50, 'Topic too long'),
  message: yup
    .string()
    .required('Message is required')
    .min(5, 'Message too short')
    .max(320, 'Message too long'),
});

export default function SendEmailForm({
  instructor,
  setOpen,
}: ISendEmail) {
  const formik = useFormik({
    initialValues: {
      topic: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setOpen(false);
    },
  });

  return (
    <Card sx={{ flex: 1 }} variant="plain">
      <Box>
        <Typography level="title-md">
          Send message a to <b>{instructor.username}</b>
        </Typography>
      </Box>
      <Divider />
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="column" gap={1}>
          <FormControl required>
            <FormLabel>Email topic</FormLabel>
            <Input
              type="text"
              name="topic"
              placeholder="ex. Issue in course #ID"
              value={formik.values.topic}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.topic && !!formik.errors.topic}
              size="sm"
            />
            {formik.touched.topic ? (
              <FormHelperText component="div">
                {formik.errors.topic}
              </FormHelperText>
            ) : (
              ''
            )}
          </FormControl>
          <FormControl required>
            <FormLabel>Email message</FormLabel>
            <Textarea
              name="message"
              placeholder="Your complain ... or praise"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              minRows={4}
              maxRows={8}
              size="sm"
            />
            {formik.touched.message ? (
              <FormHelperText component="div">
                {formik.errors.message}
              </FormHelperText>
            ) : (
              ''
            )}
          </FormControl>
          <CardOverflow>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined">
                Cancel
              </Button>
              <Button size="sm" variant="solid" type="submit">
                Send
              </Button>
            </CardActions>
          </CardOverflow>
        </Stack>
      </form>
    </Card>
  );
}
