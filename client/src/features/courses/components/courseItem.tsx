import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid'
import Typography from '@mui/joy/Typography';

import { Course } from 'shared/ts/types';
import { parseDate } from 'shared/lib/functions';

import { useSelector } from 'react-redux';
import { selectMyCourses } from 'app/enrolled/enrolled.slice';
import CourseCardType from './courseCardType';

export default function CourseItem(item: Course) {
  const enrolled = useSelector(selectMyCourses);

  const date = parseDate(item.created);
  const isEnrolled = enrolled.some((el) => el.course.id === item.id);

  return (
    <Grid sx={{ py: 2, px: 1 }}>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          <CourseCardType isEnrolled={isEnrolled} item={item} />
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
          </CardContent>
        </CardOverflow>
      </Card>
    </Grid>
  )
}