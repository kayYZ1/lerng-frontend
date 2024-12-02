import { Container, Typography } from '@mui/joy';

export default function AboutUs() {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography level="h2" component="h1" sx={{ marginBottom: 2 }}>
        About Us
      </Typography>
      <Typography>
        Welcome to LERNG! We are passionate about [briefly explain the
        purpose of the project]. Our goal is to [describe mission/vision].
        Whether you're here to [specific activities, e.g., learn, create,
        share], we’re excited to have you on board!
      </Typography>
    </Container>
  );
}
