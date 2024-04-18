import ImageIcon from '@mui/icons-material/Image';
import Alert from '@mui/joy/Alert'

export default function SuccessAlert() {
  return (
    <Alert
      variant="soft"
      color="success"
      startDecorator={<ImageIcon />}
      sx={{ mt: 2 }}
    >
      Success!
    </Alert>
  )
}