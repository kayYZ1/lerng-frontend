import { useSelector } from 'react-redux';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid';
import Skeleton from '@mui/joy/Skeleton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import LinearProgress from '@mui/joy/LinearProgress';

import { Course } from 'shared/ts/types';
import { parseDate } from 'shared/lib/functions';
import { selectMyCourses } from 'app/slice/enrolled.slice';
import { useCountProgressQuery } from 'app/api/progress.api.slice';

import CardType from './card-type';
import { selectCurrentUser } from 'app/slice/user.slice';
import CourseRating from './course-rating';
import EditCourseModal from 'features/dashboard/manage-courses/components/modals/edit-course';

export default function CourseItem(item: Course) {
  const { data, isLoading } = useCountProgressQuery(item.id);

  const enrolled = useSelector(selectMyCourses);
  const user = useSelector(selectCurrentUser);

  const date = parseDate(item.created);
  const isEnrolled = enrolled.some(
    (course) => course.course.id === item.id,
  ); // Enrolled stored in rtk memory [*]

  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength
      ? `${text.substring(0, maxLength - 5)}...`
      : text;

  return (
    <Grid sx={{ py: 2 }}>
      <Card
        variant="outlined"
        sx={{ width: 350, display: 'flex', flexDirection: 'column' }}
      >
        <CardOverflow>
          <CardType isEnrolled={isEnrolled} item={item} user={user} />
        </CardOverflow>
        <CardContent sx={{ flexGrow: 1 }}>
          <CourseRating courseId={item.id} />
          <Typography level="title-md" mb={1}>
            {truncateText(item.title, 38)}
          </Typography>
          <Stack direction="row" mb={1}>
            {item.categories.map((category) => (
              <Chip key={category} size="sm">
                {category}
              </Chip>
            ))}
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography level="body-sm">
              {truncateText(item.description, 45)}
            </Typography>
            {user.role === 'instructor' && <EditCourseModal {...item} />}
          </Stack>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" />
          <CardContent
            orientation="horizontal"
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography level="body-xs">{date}</Typography>
            {isEnrolled ? (
              <Typography level="body-xs">
                {isLoading ? <Skeleton /> : `${data}%`}
              </Typography>
            ) : (
              <Typography level="body-xs">Not enrolled</Typography>
            )}
          </CardContent>
          <LinearProgress determinate value={data} />
        </CardOverflow>
      </Card>
    </Grid>
  );
}
