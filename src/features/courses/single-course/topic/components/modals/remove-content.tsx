import { useState, Fragment } from 'react';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';

import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import { useRemoveContentMutation } from 'app/api/contents.api.slice';
import RemoveAction from 'shared/components/actions/remove-action';

export default function RemoveContentModal({
  contentId,
}: {
  contentId: string;
}) {
  const [open, setOpen] = useState(false);
  const [RemoveContent, { isLoading }] = useRemoveContentMutation();

  const removeContentHandler = async () => {
    await RemoveContent(contentId);
    setOpen(false);
  };

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <RemoveAction title="Remove content" />
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
            Are you sure you want to remove the content?
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="danger"
              onClick={removeContentHandler}
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
