import { useState, Fragment } from 'react';
import * as yup from "yup";
import Box from '@mui/joy/Box';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Tooltip from "@mui/joy/Tooltip";
import IconButton from '@mui/joy/IconButton';
import { FormControl, FormLabel, Input, Stack, Button, Textarea } from '@mui/joy';
import { useFormik } from "formik";

import AddIcon from "@mui/icons-material/Add";
import { EnrolledCourses } from 'shared/ts/types';

const validationSchema = yup.object().shape({
  problem: yup.string().required('This field is required').max(40, "Too long"),
  details: yup.string().required('This field is required').max(400, "Too long"),
});

export default function AddTicket({ course }: EnrolledCourses) {
  const [layout, setLayout] = useState<ModalDialogProps['layout'] | undefined>(
    undefined,
  );

  const formik = useFormik({
    initialValues: {
      problem: "",
      details: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
          <DialogTitle>File a feedback ticket</DialogTitle>
          <DialogContent>
            <Box display="flex" justifyContent="center" alignItems="center">
              <form onSubmit={formik.handleSubmit}>
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
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Button type="submit" fullWidth>
                    Send
                  </Button>
                </Stack>
              </form>
            </Box>
          </DialogContent>
        </ModalDialog >
      </Modal >
    </Fragment >
  );
}
