import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';

import Search from '@mui/icons-material/Search';
import Book from '@mui/icons-material/Book';
import Terminal from '@mui/icons-material/Terminal';
import TrendingUp from '@mui/icons-material/TrendingUp';

import { AuthPath } from 'routes/paths';

export default function HeroSection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 12,
      }}
    >
      <Typography
        level="title-lg"
        sx={{
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          mb: 2,
        }}
      >
        Master Linux with Expert-Led Courses
      </Typography>
      <Typography
        level="title-md"
        sx={{
          maxWidth: '800px',
          mb: 4,
        }}
      >
        From beginners to advanced users, learn Linux from industry experts
        through hands-on projects and real-world scenarios
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          width: '100%',
          maxWidth: '600px',
          mb: 8,
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
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          startDecorator={<Search />}
          required
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
      <Grid container spacing={3} sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Grid xs={12} md={4}>
          <Card variant="soft" sx={{ height: '100%' }}>
            <Book />
            <Typography level="h4">Comprehensive Curriculum</Typography>
            <Typography>
              Structured learning paths covering all aspects of Linux
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card variant="soft" sx={{ height: '100%' }}>
            <Terminal />
            <Typography level="h4">Hands-on Practice</Typography>
            <Typography>
              Interactive terminals and real-world projects
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card variant="soft" sx={{ height: '100%' }}>
            <TrendingUp />
            <Typography level="h4">Industry Recognition</Typography>
            <Typography>
              Earn certificates valued by top employers
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
