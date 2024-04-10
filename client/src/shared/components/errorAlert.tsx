import { Alert, Typography } from "@mui/joy";

import { ReportOutlined } from "@mui/icons-material";

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