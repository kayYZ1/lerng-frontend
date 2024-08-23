import { useState, Fragment } from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import IconButton from '@mui/joy/IconButton';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';

import EditRounded from '@mui/icons-material/EditRounded';

import FileUploadComponent from '../file-upload';

export default function UpdateImageModal() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <IconButton
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
          <ModalClose sx={{
            marginTop: 0.5
          }} />
          <Typography pb={0.5}>Update your avatar</Typography>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <FileUploadComponent />
          </form>
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}