import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid'
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { Link } from 'react-router-dom';

import { Course } from 'shared/ts/types';
import { parseDate } from 'shared/lib/functions';

import style from "../courses.module.css"

export default function CourseItem(item: Course) {
  const date = parseDate(item.created);

  return (
    <Grid sx={{ py: 2, px: 1 }}>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <Link to={`/dashboard/courses/course/${item.id}`} className={style.link}>
              <img
                src={item.imageUrl}
                loading="lazy"
                alt={`${item.title}`}
              />
            </Link>
          </AspectRatio>
          <IconButton
            size="md"
            variant="solid"
            color="primary"
            disabled
            sx={{
              position: 'absolute',
              zIndex: 2,
              borderRadius: '50%',
              right: '1rem',
              bottom: 0,
              transform: 'translateY(50%)',
            }}
          >
            <ExitToAppIcon />
          </IconButton>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">
            {item.title.length > 38 ? `${item.title.substring(0, 33)}...` : item.title}
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