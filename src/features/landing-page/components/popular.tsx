import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';

import Person from '@mui/icons-material/Person';

const popularCourses = [
  {
    title: 'Linux System Administration',
    description:
      'Master the basics of Linux system administration, from user management to system maintenance.',
    students: '15,234',
    level: 'Beginner',
  },
  {
    title: 'Advanced Shell Scripting',
    description:
      'Learn to write complex shell scripts and automate your Linux workflows. Lorem sadasda',
    students: '8,921',
    level: 'Advanced',
  },
  {
    title: 'Linux Security Essentials',
    description:
      'Understand security fundamentals and protect your Linux systems from threats. Lorem sadas',
    students: '12,445',
    level: 'Intermediate',
  },
];

export default function Popular() {
  return (
    <Box>
      <Typography level="h2" sx={{ textAlign: 'center', pb: 8 }}>
        This week's picks!
      </Typography>
      <Grid container spacing={4} sx={{ mx: 'auto' }}>
        {popularCourses.map((course, index) => (
          <Grid key={index} xs={12} md={4}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <Typography level="h4">{course.title}</Typography>
              <Typography sx={{ mb: 2 }}>{course.description}</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Person />
                <Typography level="body-sm">
                  {course.students} students
                </Typography>
                <Typography level="body-sm">• {course.level}</Typography>
              </Stack>
              <Button variant="solid" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
