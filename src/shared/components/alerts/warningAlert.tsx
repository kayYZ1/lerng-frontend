import Alert from '@mui/joy/Alert';
import Typography from '@mui/joy/Typography';

import WarningRounded from '@mui/icons-material/WarningRounded';

import { IAlert } from 'shared/ts/interfaces';

export default function WarningAlert({ type, message }: IAlert) {
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