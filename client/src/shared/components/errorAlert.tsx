import { IconButton, Alert, Typography } from "@mui/joy";

import { ReportOutlined, CloseRounded } from "@mui/icons-material";

export interface IErrorAlert {
  message: string | undefined;
  type: string;
}

export default function ErrorAlert({ message, type }: IErrorAlert) {
  return (
    <Alert
      sx={{ alignItems: 'flex-start' }}
      startDecorator={<ReportOutlined />}
      variant="soft"
      color="danger"
      endDecorator={
        <IconButton variant="soft" color="danger">
          <CloseRounded />
        </IconButton>
      }
    >
      <div>
        <div>{type}</div>
        <Typography level="body-sm" color="danger">
          {message}
        </Typography>
      </div>
    </Alert>
  )
}