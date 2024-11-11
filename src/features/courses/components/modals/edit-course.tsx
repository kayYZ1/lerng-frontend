import { useState, Fragment } from 'react';
import Modal from '@mui/joy/Modal';
import Typography from '@mui/joy/Typography';
import { ModalDialog } from '@mui/joy';

import { Course } from 'shared/ts/types';
import EditCourseForm from '../forms/edit-course';

export default function EditCourseModal(course: Course) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Typography
        component="div"
        level="body-xs"
        onClick={() => setOpen(true)}
        sx={{
          '&:hover': {
            textDecoration: 'underline',
          },
          cursor: 'pointer',
        }}
      >
        Edit
      </Typography>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ModalDialog>
          <EditCourseForm setOpen={setOpen} course={course} />
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
