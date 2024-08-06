import { Fragment, useState } from "react";
import { Button, IconButton, Modal, ModalDialog, Sheet, Typography, Box, FormLabel } from "@mui/joy";
import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { useFormik } from 'formik';

import { FeedbackTicket } from "shared/ts/types";
import { useChangeTicketStatusMutation } from "app/api/feedback.slice";

export default function ChangeStatusModal(feedbackTicket: FeedbackTicket) {
  const [open, setOpen] = useState<boolean>(false);

  const [ChangeTicketStatus, { error, isLoading }] = useChangeTicketStatusMutation();

  const formik = useFormik({
    initialValues: {
      status: ""
    },
    onSubmit: async (values) => {
      const ticketStatus = {
        feedbackId: feedbackTicket.id,
        status: values.status
      }
      await ChangeTicketStatus(ticketStatus)
      setOpen(false)
    }
  })

  return (
    <Fragment>
      <IconButton size='sm' color='primary' onClick={() => setOpen(true)} sx={{ padding: 1 }}>Change status</IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ModalDialog>
          <Sheet>
            <Typography level="title-md" pb={1}>Change status</Typography>
            <form onSubmit={formik.handleSubmit}>
              <FormControl required>
                <FormLabel>Status</FormLabel>
                <RadioGroup name="status" value={formik.values.status} onChange={formik.handleChange}>
                  <Radio value="active" label="Active" variant="outlined" />
                  <Radio value="rejected" label="Rejected" variant="outlined" />
                  <Radio value="resolved" label="Resolved" variant="outlined" />
                </RadioGroup>
              </FormControl>
              <Box display="flex" justifyContent="flex-end" gap={1}>
                <Button size="sm" variant="outlined" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button size="sm" variant="solid" type="submit" loading={isLoading}>
                  Save
                </Button>
              </Box>
            </form>
            {error ? "Something went wrong. Please try again" : ""}
          </Sheet>
        </ModalDialog>
      </Modal>
    </Fragment>
  )
}