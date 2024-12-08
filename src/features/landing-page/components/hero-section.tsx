import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetLatestUsersQuery } from 'app/api/users.api.slice';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';

import Mail from '@mui/icons-material/Mail';
import Book from '@mui/icons-material/Book';
import QuizIcon from '@mui/icons-material/Quiz';
import FeedbackIcon from '@mui/icons-material/Feedback';

import { AuthPath } from 'routes/paths';

const mockCardsData = [
  {
    title: 'Comprehensive Curriculum',
    description: 'Structured learning paths covering all aspects of Linux',
    icon: <Book />,
  },
  {
    title: 'Knowledge Checks',
    description: 'Test your understanding of subjects with quizes!',
    icon: <QuizIcon />,
  },
  {
    title: 'Feedback Modules',
    description:
      'Give feedback on the course modules directly to instructors!',
    icon: <FeedbackIcon />,
  },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const {
    data: latestUsers,
    isLoading,
    error,
  } = useGetLatestUsersQuery(undefined);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 8,
      }}
    >
      <Typography
        level="title-lg"
        sx={{
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          py: 2,
        }}
      >
        Master Linux with Expert-Led Courses
      </Typography>
      <Typography
        level="title-md"
        sx={{
          maxWidth: '800px',
          py: 2,
        }}
      >
        From beginners to advanced users, learn Linux from industry experts
        through hands-on projects and real-world scenarios
      </Typography>
      <Box
        pb={4}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          textAlign: 'left',
          '& > *': {
            flexShrink: 0,
          },
        }}
      >
        <AvatarGroup size="md">
          {isLoading || error
            ? [1, 2, 3].map((item) => <Avatar key={item} />)
            : latestUsers!.map((user) => {
                return <Avatar key={user.id} src={user.imageUrl} />;
              })}
        </AvatarGroup>
        <Typography textColor="text.secondary">
          You can join our thriving community of <b>10,000+</b> <br></br>
          Linux enthusiasts <i>right now</i>!
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          width: '100%',
          maxWidth: '600px',
          pb: 6,
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
        }}
      >
        <Input
          sx={{ flex: 1 }}
          size="md"
          type="email"
          placeholder="Your e-mail address"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          startDecorator={<Mail />}
        />
        <Button
          size="lg"
          onClick={() => {
            navigate(AuthPath.SIGN_UP, {
              state: {
                value: email,
              },
            });
          }}
        >
          Let's get started!
        </Button>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          mx: 'auto',
          px: 2,
          maxWidth: 'lg',
          justifyContent: 'center',
        }}
      >
        {mockCardsData.map((card) => (
          <Grid xs={12} md={4} key={card.title}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                py: 4,
                px: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: 'sm',
                borderRadius: 'md',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 'lg',
                },
              }}
            >
              <IconButton size="lg">{card.icon}</IconButton>
              <Typography level="body-lg" fontWeight="lg" sx={{ mb: 2 }}>
                {card.title}
              </Typography>
              <Typography
                level="body-md"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
