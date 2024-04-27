import React from "react";
import { IconButton, Modal } from "@mui/joy";
import AddIcon from '@mui/icons-material/Add';

import AddContentForm from "../forms/addContentForm";

export default function AddContentModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <AddIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <AddContentForm setOpen={setOpen} />
      </Modal>
    </React.Fragment>
  );
}