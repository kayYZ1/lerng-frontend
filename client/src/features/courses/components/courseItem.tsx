import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid'
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';

import { Link } from 'react-router-dom';

import { Course } from 'shared/ts/types';
import { ParseDate } from 'shared/lib/functions';

import style from "../courses.module.css"

export default function CourseItem(item: Course) {
  const date = ParseDate(item.created);

  return (
    <Grid sx={{ py: 2, px: 1 }}>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={item.imageUrl}
              loading="lazy"
              alt={`${item.id}`}
            />
          </AspectRatio>
          <IconButton
            aria-label="Like minimal photography"
            size="md"
            variant="solid"
            color="danger"
            sx={{
              position: 'absolute',
              zIndex: 2,
              borderRadius: '50%',
              right: '1rem',
              bottom: 0,
              transform: 'translateY(50%)',
            }}
          >
            <Favorite />
          </IconButton>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">
            <Link to={`/dashboard/courses/course/${item.id}`} className={style.link}>
              {item.title.length > 38 ? `${item.title.substring(0, 33)}...` : item.title}
            </Link>
          </Typography>
          <Typography level="body-sm">
            {item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description}
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