import { FormControl, FormLabel, Input, Stack, Box, Checkbox, Button, Typography, FormHelperText, Link } from "@mui/joy";

export default function SignUpForm() {
  return (
    <form>
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" />
      </FormControl>
      <FormControl required>
        <FormLabel>Username</FormLabel>
        <Input type="text" name="username" />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" />
      </FormControl>
      <FormControl required>
        <FormLabel>Repeat password</FormLabel>
        <Input type="password" name="repeatPassword" />
      </FormControl>
      <Stack gap={4} sx={{ mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <FormControl size="sm" sx={{ width: 400 }}>
            <Checkbox
              label={
                <>
                  I have read and agree to the{' '}
                  <Typography fontWeight="md">terms and conditions</Typography>.
                </>
              }
            />
            <FormHelperText>
              <Typography level="body-sm">
                Read our <Link href="#link">terms and conditions</Link>.
              </Typography>
            </FormHelperText>
          </FormControl>
        </Box>
        <Button type="submit" fullWidth>
          Sign in
        </Button>
      </Stack>
    </form>
  )
}