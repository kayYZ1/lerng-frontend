import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from 'app/slice/user.slice';
import { useSendEmailMutation } from 'app/api/users.api.slice';

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
import SuccessAlert from 'shared/components/alerts/success';

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
}: {
  instructor: Instructor;
  setOpen: (value: boolean) => void;
}) {
  const user = useSelector(selectCurrentUser);
  const [SendEmail, { isLoading, isSuccess }] = useSendEmailMutation();

  const formik = useFormik({
    initialValues: {
      topic: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const body = {
        ...values,
        sender: user.email,
        instructorId: instructor.id,
      };

      await SendEmail(body);
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
              <Button
                size="sm"
                variant="outlined"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                variant="solid"
                type="submit"
                loading={isLoading}
              >
                Send
              </Button>
            </CardActions>
          </CardOverflow>
          {isSuccess && (
            <SuccessAlert
              type="Email"
              message="Message succesfully sent"
            />
          )}
        </Stack>
      </form>
    </Card>
  );
}
