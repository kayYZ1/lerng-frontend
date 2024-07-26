import { useState, Fragment } from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';

import { useSelector } from 'react-redux';
import { selectMyCourses } from 'app/slice/enrolled.slice';
import { parseDate } from 'shared/lib/functions';

export default function AddTicket() {
  const [layout, setLayout] = useState<ModalDialogProps['layout'] | undefined>(
    undefined,
  );
  const enrolledCourses = useSelector(selectMyCourses);

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
              <Autocomplete
                placeholder='Select course...'
                options={enrolledCourses}
                getOptionLabel={(option) => option.course.title}
                renderOption={(props, option) => (
                  <AutocompleteOption key={option.id} {...props}>
                    <ListItemDecorator>
                      <img
                        loading="lazy"
                        width="20"
                        src={option.course.imageUrl}
                        alt={option.course.title}
                      />
                    </ListItemDecorator>
                    <ListItemContent sx={{ fontSize: 'sm' }}>
                      {option.course.title}
                      <Typography level="body-xs">
                        {parseDate(option.course.created)}
                      </Typography>
                    </ListItemContent>
                  </AutocompleteOption>
                )} />
            </Box>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}

// 1. Select the course 2. Fetch the instructor from that course 3. Selet one of the options/write your own 4.Description?
