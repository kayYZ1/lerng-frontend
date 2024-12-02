import { Container, Typography } from '@mui/joy';

export default function Tos() {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography level="h2" component="h1" sx={{ marginBottom: 2 }}>
        Terms of Service for Hobby Project
      </Typography>
      <Typography level="h4" sx={{ marginBottom: 1 }}>
        Effective Date: 12/2/2024
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        1. Acceptance of Terms
      </Typography>
      <Typography>
        By using LERNG, you agree to comply with and be bound by these
        Terms of Service. If you do not agree to these terms, please
        discontinue use of the project.
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        2. Use of the Project
      </Typography>
      <Typography component="div">
        <ul>
          <li>
            The project is intended for personal, non-commercial use.
          </li>
          <li>
            You agree not to misuse the project or use it for any unlawful
            activities.
          </li>
          <li>
            We reserve the right to modify or discontinue the project
            without prior notice.
          </li>
        </ul>
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        3. Intellectual Property
      </Typography>
      <Typography>
        All content, code, and designs within [Hobby Project Name] are
        owned by the creator unless otherwise stated. You may not
        reproduce, distribute, or create derivative works without prior
        permission.
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        4. Limitations of Liability
      </Typography>
      <Typography>
        LERNG is provided "as-is" without warranties of any kind. We are
        not liable for any damages resulting from the use or inability to
        use the project.
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        5. Termination
      </Typography>
      <Typography>
        We reserve the right to terminate or restrict access to the project
        at any time, for any reason, without notice.
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        6. Changes to Terms
      </Typography>
      <Typography>
        We may update these Terms of Service from time to time. Any changes
        will be posted here with an updated effective date. Continued use
        of the project implies acceptance of the revised terms.
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        7. Contact Us
      </Typography>
      <Typography component="div">
        If you have questions or concerns about these Terms of Service,
        please contact us at:
        <ul>
          <li>
            <strong>Email:</strong> kayzn29@gmail.com
          </li>
          <li>
            <strong>Website:</strong> lerng.netlify.app
          </li>
        </ul>
      </Typography>
    </Container>
  );
}
