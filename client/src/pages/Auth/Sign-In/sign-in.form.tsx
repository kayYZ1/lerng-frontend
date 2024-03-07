import { FormControl, FormLabel, Input, Stack, Box, Link, Button } from "@mui/joy";

export default function SignInForm() {
  return (
    <form>
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" />
      </FormControl>
      <Stack gap={4} sx={{ mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link level="title-sm" href="#replace-with-a-link">
            Forgot your password?
          </Link>
        </Box>
        <Button type="submit" fullWidth>
          Sign in
        </Button>
      </Stack>
    </form>
  )
}