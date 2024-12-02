import { Container, Typography } from '@mui/joy';

export default function Services() {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography level="h2" component="h1" sx={{ marginBottom: 2 }}>
        Our Services
      </Typography>
      <Typography>At LERNG, we offer:</Typography>
      <Typography component="div">
        <ul>
          <li>
            <strong>Service 1:</strong> [Brief description of service 1].
          </li>
          <li>
            <strong>Service 2:</strong> [Brief description of service 2].
          </li>
          <li>
            <strong>Service 3:</strong> [Brief description of service 3].
          </li>
        </ul>
      </Typography>
      <Typography>
        Our services are designed to spread knowledge about linux.
      </Typography>
    </Container>
  );
}
