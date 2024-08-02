import React from "react";
import { IconButton, Modal, Sheet } from "@mui/joy";

import ZoomIn from '@mui/icons-material/ZoomIn';

export default function ViewTicketModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <ZoomIn />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet>
          Ticket details
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}