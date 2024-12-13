import { useNavigate } from 'react-router-dom';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';

import Person from '@mui/icons-material/Person';
import { CoursesPath } from 'routes/paths';

import { useGetPopularCoursesQuery } from 'app/api/enrolled.api.slice';

export default function Popular() {
  const navigate = useNavigate();

  const { data: popularCourses } = useGetPopularCoursesQuery('Popular');

  return (
    <Box sx={{ px: 4 }}>
      <Typography level="h2" sx={{ textAlign: 'center', pb: 8 }}>
        This Week's Picks!
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          mx: 'auto',
          maxWidth: 'lg',
          justifyContent: 'center',
        }}
      >
        {popularCourses &&
          popularCourses.map((popularCourse, index) => (
            <Grid key={index} xs={12} md={4}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 3,
                  borderRadius: 'lg',
                  boxShadow: 'sm',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 'lg',
                  },
                }}
              >
                <Box>
                  <Typography
                    level="h4"
                    fontWeight="lg"
                    sx={{ mb: 1, color: 'primary.main' }}
                  >
                    {popularCourse.course.title}
                  </Typography>
                  <Typography
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {popularCourse.course.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ color: 'text.secondary' }}
                  >
                    <Person sx={{ fontSize: 20 }} />
                    <Typography level="body-sm">
                      {popularCourse.users} students
                    </Typography>
                  </Stack>
                </Box>
                <Button
                  variant="solid"
                  color="primary"
                  sx={{
                    mt: 3,
                    py: 1.2,
                    fontWeight: 'bold',
                  }}
                  onClick={() => navigate(CoursesPath.COURSES)}
                >
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
