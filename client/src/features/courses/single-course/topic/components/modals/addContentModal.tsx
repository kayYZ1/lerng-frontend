import React from "react";
import { ListItemButton, ListItemDecorator, Modal } from "@mui/joy";

import AddContentForm from "../forms/addContentForm";

export default function AddContentModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <ListItemButton onClick={() => setOpen(true)}>
        <ListItemDecorator>
        </ListItemDecorator>
        Add new content
      </ListItemButton>
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