import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import IconButton from "@mui/joy/IconButton";

import EditRounded from '@mui/icons-material/EditRounded';
import FileUploadInput from './fileUploadInput';

export default function UpdateImageModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <IconButton
        aria-label="upload new picture"
        size="sm"
        variant="outlined"
        color="neutral"
        sx={{
          bgcolor: 'background.body',
          position: 'absolute',
          zIndex: 2,
          borderRadius: '50%',
          left: 100,
          top: 170,
          boxShadow: 'sm',
        }}
        onClick={() => setOpen(true)}
      >
        <EditRounded />
      </IconButton>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Upload new avatar</DialogTitle>
          <DialogContent>Choose the avatar that fits you!</DialogContent>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack>
              <FileUploadInput /> 
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}