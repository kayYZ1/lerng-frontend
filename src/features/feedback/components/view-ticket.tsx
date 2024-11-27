import { useState, Fragment } from 'react';

import IconButton from '@mui/joy/IconButton';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import { ColorPaletteProp, Alert } from '@mui/joy';

import ZoomIn from '@mui/icons-material/ZoomIn';

import { Feedback } from 'shared/ts/types';
import { parseDate } from 'shared/utils/functions';

export default function ViewTicketModal(feedbackTicket: Feedback) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <ZoomIn />
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
          <Sheet>
            <Box display="flex" justifyContent="space-between">
              <Typography level="body-sm">
                Ticket #{feedbackTicket.ticket_id}
              </Typography>
              <Typography level="body-xs" pt={0.2}>
                {parseDate(feedbackTicket.created)}
              </Typography>
            </Box>
            <Stack direction="column" gap={1} py={2}>
              <Box flexDirection="column" width="100%">
                <Typography level="body-xs" component="p" pb={0.5}>
                  Course
                </Typography>
                <Input
                  size="sm"
                  value={feedbackTicket.course.title}
                  disabled
                />
              </Box>
              <Box flexDirection="column" width="100%">
                <Typography level="body-xs" component="p" pb={0.5}>
                  Problem
                </Typography>
                <Input size="sm" value={feedbackTicket.problem} disabled />
              </Box>
              <Box flexDirection="column" width="100%">
                <Typography level="body-xs" component="p" pb={0.5}>
                  Details of the problem
                </Typography>
                <Textarea
                  size="sm"
                  value={feedbackTicket.details}
                  disabled
                  minRows={3}
                />
              </Box>
              <Box flexDirection="column" width="100%">
                <Typography level="body-xs" component="p" pb={0.5}>
                  Feedback
                </Typography>
                <Alert
                  variant="soft"
                  color={
                    {
                      active: 'primary',
                      rejected: 'danger',
                      resolved: 'success',
                    }[feedbackTicket.status] as ColorPaletteProp
                  }
                >
                  <Box>
                    <Typography sx={{ textTransform: 'capitalize' }}>
                      Status: {feedbackTicket.status}
                    </Typography>
                    <Typography level="body-xs" pt={0.5}>
                      {feedbackTicket.feedbackMessage}
                    </Typography>
                  </Box>
                </Alert>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Typography level="body-xs">
                  Last update: {parseDate(feedbackTicket.updated)}
                </Typography>
              </Box>
            </Stack>
          </Sheet>
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}
