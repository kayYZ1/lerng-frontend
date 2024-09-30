import { useState, Fragment } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import Tooltip from '@mui/joy/Tooltip';
import IconButton from '@mui/joy/IconButton';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

import AddIcon from '@mui/icons-material/Add';

import { EnrolledCourses } from 'shared/ts/types';
import { useAddFeedbackTicketMutation } from 'app/api/feedback.slice';
import { transformErrorResponse } from 'shared/lib/functions';
import ErrorAlert from 'shared/components/alerts/error';
import { Typography } from '@mui/joy';

const validationSchema = yup.object().shape({
  problem: yup.string().required('This field is required').max(40, "Too long"),
  details: yup.string().required('This field is required').max(400, "Too long"),
});

export default function AddTicket({ course }: EnrolledCourses) {
  const [layout, setLayout] = useState<ModalDialogProps['layout'] | undefined>(
    undefined,
  );
  const [AddFeedbackTicket, { isLoading, error }] = useAddFeedbackTicketMutation();

  const errorMessage = transformErrorResponse(error);

  const formik = useFormik({
    initialValues: {
      problem: "",
      details: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const ticketFeedback = {
        problem: values.problem,
        details: values.details,
        courseId: course.id,
      }

      await AddFeedbackTicket(ticketFeedback);
      resetForm();
      setLayout(undefined);
    }
  })

  return (
    <Fragment>
      <Tooltip title="Add a ticket">
        <IconButton color="primary" size="md" sx={{ fontSize: "smaller" }}
          onClick={() => {
            setLayout('center');
          }}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout}>
          <ModalClose />
          <Typography level="body-md">
            File a feedback ticket
          </Typography>
          <Typography level="body-sm">
            Ticket for: {course.title}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" gap={1}>
              <FormControl required>
                <FormLabel>Describe your problem (short)</FormLabel>
                <Input
                  type="text"
                  name="problem"
                  value={formik.values.problem}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.problem && !!formik.errors.problem}
                />
              </FormControl>
              <FormControl required>
                <FormLabel>Details of the problem</FormLabel>
                <Textarea
                  minRows={2}
                  name="details"
                  value={formik.values.details}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.details && !!formik.errors.details}
                />
              </FormControl>
              <Button type="submit" fullWidth loading={isLoading} sx={{ marginTop: 2 }}>
                Send
              </Button>
            </Stack>
          </form>
          {error ? <ErrorAlert message={errorMessage} type="Add ticket error" /> : ""}
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
