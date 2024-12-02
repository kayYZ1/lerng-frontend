import { Container, Typography } from '@mui/joy';

export default function Services() {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography level="h2" component="h1" sx={{ marginBottom: 2 }}>
        Contact Us
      </Typography>
      <Typography>
        We’d love to hear from you! If you have any questions, feedback, or
        just want to say hello, feel free to reach out:
      </Typography>
      <Typography component="div">
        <ul>
          <li>
            <strong>Email:</strong> kayzn29@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> 333-333-333
          </li>
          <li>
            <strong>Address:</strong> :)
          </li>
        </ul>
      </Typography>
      <Typography>
        Alternatively, you can use our contact form on our website at
        lerng.netlify.app
      </Typography>
    </Container>
  );
}
