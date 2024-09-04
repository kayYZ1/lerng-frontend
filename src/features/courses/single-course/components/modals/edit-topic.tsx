import { useState, Fragment } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Button from '@mui/joy/Button';

import EditTopicForm from '../forms/edit-topic';
import { Topic } from 'shared/ts/types';

export default function EditTopicModal(topic: Topic) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Button color="neutral" onClick={() => setOpen(true)}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ModalDialog>
          <EditTopicForm setOpen={setOpen} topic={topic} />
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}