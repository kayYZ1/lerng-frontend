import Alert from '@mui/joy/Alert';
import Typography from '@mui/joy/Typography';

import DoneIcon from '@mui/icons-material/Done';

import { IAlert } from 'shared/ts/interfaces';

export default function SuccessAlert({ message, type }: IAlert) {
  return (
    <Alert variant="soft" color="success" startDecorator={<DoneIcon />}>
      <div>
        <div>{type}</div>
        <Typography level="body-sm" color="success">
          {message}
        </Typography>
      </div>
    </Alert>
  );
}
