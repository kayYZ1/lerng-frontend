import { IconButton, Alert, Typography } from "@mui/joy";

import { WarningRounded, CloseRounded } from "@mui/icons-material";

import { IErrorAlert } from "./errorAlert";

export default function WarningAlert({ type, message }: IErrorAlert) {
  return (
    <Alert
      sx={{ alignItems: 'flex-start' }}
      startDecorator={<WarningRounded />}
      variant="soft"
      color="warning"
      endDecorator={
        <IconButton variant="soft" color="warning">
          <CloseRounded />
        </IconButton>
      }
    >
      <div>
        <div>{type}</div>
        <Typography level="body-sm" color="warning">
          {message}
        </Typography>
      </div>
    </Alert>
  )
}