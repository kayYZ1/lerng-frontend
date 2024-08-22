import Alert from '@mui/joy/Alert'
import { Typography } from '@mui/joy';
import { IAlert } from 'shared/ts/interfaces';
import DoneIcon from '@mui/icons-material/Done';

export default function SuccessAlert({ message, type }: IAlert) {
  return (
    <Alert
      variant="soft"
      color="success"
      startDecorator={<DoneIcon />}
    >
      <div>
        <div>{type}</div>
        <Typography level="body-sm" color="success">
          {message}
        </Typography>
      </div>
    </Alert>
  )
}