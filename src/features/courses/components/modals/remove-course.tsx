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

import RemoveAction from 'shared/components/actions/remove-action';
import { useRemoveCourseMutation } from 'app/api/courses.api.slice';

export default function RemoveCourseModal({
  courseId,
}: {
  courseId: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [RemoveCourse, { isLoading }] = useRemoveCourseMutation();

  const removeCourseHandler = async () => {
    await RemoveCourse(courseId);
    setOpen(false);
  };

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <RemoveAction title="Remove course" />
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
            Are you sure you want to remove this course? This is a
            destructive action.
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="danger"
              onClick={removeCourseHandler}
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
