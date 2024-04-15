import { Box } from '@mui/joy';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useNavigate, Link } from 'react-router-dom';
import { AuthPath } from 'routes/paths';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Learn-Linux.com
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Welcome to Learn-Linux, your ultimate destination for mastering the ins and outs of the Linux operating system.
      </Typography>
      <Button
        size="lg"
        endDecorator={<ArrowForward />}
        sx={{ mt: 2, mb: 1 }}
        onClick={() => navigate(`${AuthPath.SIGN_UP}`)}
      >
        Join
      </Button>
      <Typography>
        Already have an account?
        <Link to={AuthPath.SIGN_IN} style={{ color: "#0b6bcb", textDecoration: "none", paddingLeft: "5px" }}>
          Sign in
        </Link>
      </Typography>
    </Box>
  );
}