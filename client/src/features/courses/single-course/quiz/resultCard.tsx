import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'app/users/user.slice';
import { useNavigate } from 'react-router-dom';

export default function ResultCard({ score }: { score: number }) {
  const user = useSelector(selectCurrentUser)
  const navigate = useNavigate()

  return (
    <Card
      data-resizable
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        '--icon-size': '100px',
      }}
    >
      <CardOverflow variant="solid" color="primary">
        <AspectRatio
          variant="outlined"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
            <BakeryDiningIcon color="primary" sx={{ fontSize: '4rem' }} />
          </div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>

      </Typography>
      <CardContent sx={{ maxWidth: '40ch' }}>
        Congratulations {user.username}, Your score is {score}!
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
      >
        <Button variant="solid" color="primary" disabled>
          Share
        </Button>
        <Button variant="outlined" color="neutral" onClick={() => navigate(-2)}>
          Back to course
        </Button>
      </CardActions>
    </Card>
  );
}