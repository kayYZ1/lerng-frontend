import { useState, Fragment } from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

export default function AddTicket() {
  const [layout, setLayout] = useState<ModalDialogProps['layout'] | undefined>(
    undefined,
  );

  return (
    <Fragment>
      <Button size="sm" sx={{ fontSize: "smaller" }}
        onClick={() => {
          setLayout('center');
        }}>
        Add ticket
      </Button>
      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout}>
          <ModalClose />
          <DialogTitle>Ticket</DialogTitle>
          <DialogContent>
            <Box display="flex" justifyContent="center" alignItems="center">
            </Box>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
