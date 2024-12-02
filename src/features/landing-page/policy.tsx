import { Container, Typography } from '@mui/joy';

export default function Policy() {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography level="h2" component="h1" sx={{ marginBottom: 2 }}>
        Privacy Policy for Hobby Project (LERNG)
      </Typography>
      <Typography level="title-sm" sx={{ marginBottom: 1 }}>
        Effective Date: 12/2/2024
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        1. Information We Collect
      </Typography>
      <Typography component="div">
        We may collect the following types of information:
        <ul>
          <li>
            <strong>Personal Information</strong>: Such as your name, email
            address, or other details you provide voluntarily (e.g.,
            signing up for a newsletter or contacting us).
          </li>
          <li>
            <strong>Non-Personal Information</strong>: Such as anonymized
            usage data, browser type, and interaction logs for improving
            the project.
          </li>
        </ul>
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        2. How We Use Your Information
      </Typography>
      <Typography component="div">
        We use the information collected for the following purposes:
        <ul>
          <li>To provide and maintain the project’s functionality.</li>
          <li>To improve and personalize the user experience.</li>
          <li>
            To communicate with you (e.g., respond to inquiries or send
            updates).
          </li>
        </ul>
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        3. Sharing of Information
      </Typography>
      <Typography component="div">
        We do not sell, trade, or rent your personal information to third
        parties. We may share information:
        <ul>
          <li>If required by law or to comply with legal obligations.</li>
          <li>To protect our rights or enforce our policies.</li>
        </ul>
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        4. Data Security
      </Typography>
      <Typography>
        We implement reasonable security measures to protect your
        information. However, no method of transmission or storage is 100%
        secure, and we cannot guarantee absolute security.
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        5. Third-Party Services
      </Typography>
      <Typography>
        We may use third-party tools or services (e.g., hosting platforms,
        analytics providers) that have their own privacy policies. Please
        review their policies for more information.
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        6. Your Rights
      </Typography>
      <Typography component="div">
        You have the right to:
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>
            Opt out of communications or data collection (where
            applicable).
          </li>
        </ul>
        For requests, please contact us at kayzn29@gmail.com.
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        7. Changes to This Policy
      </Typography>
      <Typography>
        We may update this Privacy Policy from time to time. Any changes
        will be posted here with an updated effective date. Continued use
        of the project implies acceptance of the revised policy.
      </Typography>

      <Typography level="h4" sx={{ marginTop: 2, marginBottom: 1 }}>
        8. Contact Us
      </Typography>
      <Typography component="div">
        If you have questions or concerns about this Privacy Policy, please
        contact us at:
        <ul>
          <li>
            <strong>Email:</strong> kayzn29@gmail.com
          </li>
          <li>
            <strong>Website:</strong> https://lerng.netlify.app/
          </li>
        </ul>
      </Typography>
    </Container>
  );
}
