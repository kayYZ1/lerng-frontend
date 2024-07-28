import { useState, Fragment } from 'react';
import Box from '@mui/joy/Box';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Tooltip from "@mui/joy/Tooltip";
import IconButton from '@mui/joy/IconButton';

import AddIcon from "@mui/icons-material/Add";
import { EnrolledCourses } from 'shared/ts/types';

export default function AddTicket({ course }: EnrolledCourses) {
  const [layout, setLayout] = useState<ModalDialogProps['layout'] | undefined>(
    undefined,
  );

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
              {course.title}
            </Box>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </Fragment >
  );
}
