import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';

import CreateCourseForm from './forms/createCourseForm';

export default function AddCourseImageModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button color="primary" onClick={() => setOpen(true)} size='sm'>
        Create course
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ModalDialog>
          <CreateCourseForm setOpen={setOpen} />
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}