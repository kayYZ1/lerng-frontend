import { useSelector } from 'react-redux';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';

import { Course } from 'shared/ts/types';
import { parseDate } from 'shared/lib/functions';
import { selectMyCourses } from 'app/slice/enrolled.slice';

import CardType from './card-type';
import { selectCurrentUser } from 'app/slice/user.slice';
import EditCourseModal from 'features/dashboard/manage-courses/components/modals/edit-course';

export default function CourseItem(item: Course) {
  const enrolled = useSelector(selectMyCourses);
  const user = useSelector(selectCurrentUser);

  const date = parseDate(item.created);
  const isEnrolled = enrolled.some((course) => course.course.id === item.id);

  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? `${text.substring(0, maxLength - 5)}...` : text;

  return (
    <Grid sx={{ py: 2 }}>
      <Card variant="outlined" sx={{ width: 350, display: 'flex', flexDirection: 'column' }}>
        <CardOverflow>
          <CardType isEnrolled={isEnrolled} item={item} user={user} />
        </CardOverflow>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography level="title-md" mb={1}>
            {truncateText(item.title, 38)}
          </Typography>
          <Typography level="body-sm">
            {truncateText(item.description, 80)}
          </Typography>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" />
          <CardContent orientation="horizontal" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography level="body-xs">Added {date}</Typography>
            {user.role === 'instructor' && <EditCourseModal {...item} />}
          </CardContent>
        </CardOverflow>
      </Card>
    </Grid>
  )
}