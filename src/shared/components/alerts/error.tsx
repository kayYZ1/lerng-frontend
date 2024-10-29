import Alert from '@mui/joy/Alert';
import Typography from '@mui/joy/Typography';

import ReportOutlined from '@mui/icons-material/ReportOutlined';

import { IAlert } from 'shared/ts/interfaces';

export default function ErrorAlert({ message, type }: IAlert) {
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
  );
}
