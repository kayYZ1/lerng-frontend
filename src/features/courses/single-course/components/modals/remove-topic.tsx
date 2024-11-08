import { useState, Fragment } from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import IconButton from '@mui/joy/IconButton';

import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useRemoveTopicMutation } from 'app/api/topics.api.slice';

export default function RemoveTopicModal({
  topicId,
}: {
  topicId: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [RemoveTopic, { isLoading }] = useRemoveTopicMutation();

  const removeTopicHandler = async () => {
    await RemoveTopic(topicId);
    setOpen(false);
  };

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <DeleteForeverIcon />
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
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to remove the topic? This is a
            destructive action.
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="danger"
              onClick={removeTopicHandler}
              loading={isLoading}
            >
              Yes, I'm sure
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
