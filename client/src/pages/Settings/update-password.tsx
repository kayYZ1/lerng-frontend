import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import { FormControl, Input, FormLabel } from '@mui/joy';

export default function UpdatePassword() {
  return (
    <Card>
      <Box sx={{ mb: 1 }}>
        <Typography level="title-md">Password settings</Typography>
        <Typography level="body-sm">
          You can update your password here
        </Typography>
      </Box>
      <Divider />
      <Stack spacing={2} sx={{ my: 1 }}>
        <FormControl required>
          <FormLabel>Current password</FormLabel>
          <Input
            type="password"
            name="currentPassword"
          />
        </FormControl>
        <FormControl required>
          <FormLabel>Repeat current password</FormLabel>
          <Input
            type="password"
            name="repeatCurrentPassword"
          />
        </FormControl>
        <FormControl required>
          <FormLabel>New password</FormLabel>
          <Input
            type="password"
            name="newPassword"
          />
        </FormControl>
      </Stack>
      <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
          <Button size="sm" variant="outlined" color="neutral">
            Cancel
          </Button>
          <Button size="sm" variant="solid">
            Save
          </Button>
        </CardActions>
      </CardOverflow>
    </Card>
  )
}