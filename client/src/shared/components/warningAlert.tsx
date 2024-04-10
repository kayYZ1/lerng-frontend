import { Alert, Typography } from "@mui/joy";

import { WarningRounded } from "@mui/icons-material";

import { IErrorAlert } from "./errorAlert";

export default function WarningAlert({ type, message }: IErrorAlert) {
  return (
    <Alert
      sx={{ alignItems: 'flex-start' }}
      startDecorator={<WarningRounded />}
      variant="soft"
      color="warning"
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