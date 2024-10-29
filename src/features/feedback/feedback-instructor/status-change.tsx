import { Fragment, useState } from 'react';

import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Textarea from '@mui/joy/Textarea';
import FormHelperText from '@mui/joy/FormHelperText';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { FeedbackTicket } from 'shared/ts/types';
import { useChangeTicketStatusMutation } from 'app/api/feedback.slice';

const validationSchema = yup.object().shape({
  feedbackMessage: yup.string().max(200, 'Too long'),
});

export default function ChangeStatusModal(feedbackTicket: FeedbackTicket) {
  const [open, setOpen] = useState<boolean>(false);

  const [ChangeTicketStatus, { error, isLoading }] =
    useChangeTicketStatusMutation();

  const formik = useFormik({
    initialValues: {
      status: '',
      feedbackMessage: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const ticketStatus = {
        feedbackId: feedbackTicket.id,
        status: values.status,
        feedbackMessage: values.feedbackMessage,
      };
      await ChangeTicketStatus(ticketStatus);
      setOpen(false);
    },
  });

  return (
    <Fragment>
      <IconButton
        size="sm"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ padding: 1 }}
      >
        Change status
      </IconButton>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <Typography level="title-md" pb={1}>
            Change status
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <FormControl required>
              <FormLabel>Status</FormLabel>
              <RadioGroup
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
              >
                <Radio value="active" label="Active" variant="outlined" />
                <Radio
                  value="rejected"
                  label="Rejected"
                  variant="outlined"
                />
                <Radio
                  value="resolved"
                  label="Resolved"
                  variant="outlined"
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ py: 1 }}>
              <FormLabel>Feedback message</FormLabel>
              <Textarea
                name="feedbackMessage"
                placeholder={
                  feedbackTicket.feedbackMessage
                    ? feedbackTicket.feedbackMessage
                    : 'Write response to the user here.'
                }
                value={formik.values.feedbackMessage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                minRows={2}
                maxRows={4}
              />
              {formik.touched.feedbackMessage ? (
                <FormHelperText component="div">
                  {formik.errors.feedbackMessage}
                </FormHelperText>
              ) : (
                ''
              )}
            </FormControl>
            <Box display="flex" justifyContent="flex-end" gap={1} pt={1}>
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
                Save
              </Button>
            </Box>
          </form>
          {error ? 'Something went wrong. Please try again' : ''}
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
