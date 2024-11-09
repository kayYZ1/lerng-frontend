import { useState, Fragment } from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import IconButton from '@mui/joy/IconButton';

import EditTopicForm from '../forms/edit-topic';
import { Topic } from 'shared/ts/types';
import EditAction from 'shared/components/actions/edit-action';

export default function EditTopicModal(topic: Topic) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <EditAction title="Edit topic" />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ModalDialog>
          <EditTopicForm setOpen={setOpen} topic={topic} />
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
