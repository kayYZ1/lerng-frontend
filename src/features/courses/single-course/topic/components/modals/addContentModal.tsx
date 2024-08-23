import { useState, Fragment } from "react";

import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";

import AddContentForm from "../forms/addContentForm";

export default function AddContentModal() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
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
        <ModalDialog>
          <AddContentForm setOpen={setOpen} />
        </ModalDialog>
      </Modal>
    </Fragment>
  );
}