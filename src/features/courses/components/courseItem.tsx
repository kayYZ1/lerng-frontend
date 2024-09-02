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

import CourseCardType from './courseCardType';
import { selectCurrentUser } from 'app/slice/user.slice';
import EditCourseModal from 'features/dashboard/manage-courses/components/modals/editCourseModal';

export default function CourseItem(item: Course) {
  const enrolled = useSelector(selectMyCourses);
  const user = useSelector(selectCurrentUser);

  const date = parseDate(item.created);
  const isEnrolled = enrolled.some((course) => course.course.id === item.id);

  return (
    <Grid sx={{ py: 2, px: 1 }}>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          <CourseCardType isEnrolled={isEnrolled} item={item} user={user} />
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">
            {item.title.length > 38 ? `${item.title.substring(0, 33)}...` : item.title}
          </Typography>
          <Typography level="body-sm">
            {item.description.length > 80 ? `${item.description.substring(0, 75)}...` : item.description}
          </Typography>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs">Added {date}</Typography>
            {user.role === 'instructor' ? <EditCourseModal {...item} /> : ""}
          </CardContent>
        </CardOverflow>
      </Card>
    </Grid >
  )
}