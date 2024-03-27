import { IconButton, Alert, Typography } from "@mui/joy";

import { ReportOutlined, CloseRounded } from "@mui/icons-material";

interface ErrorAlert {
  message: string | undefined;
}

export default function ErrorAlert({ message }: ErrorAlert) {
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
        <div>Error</div>
        <Typography level="body-sm" color="danger">
          {message}
        </Typography>
      </div>
    </Alert>
  )
}