import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid'
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Tooltip from "@mui/joy/Tooltip";
import LoginIcon from '@mui/icons-material/Login';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Link, useNavigate } from 'react-router-dom';

import { Course } from 'shared/ts/types';
import { parseDate } from 'shared/lib/functions';

import style from "../courses.module.css"
import { useSelector } from 'react-redux';
import { selectMyCourses } from 'app/enrolled/enrolled.slice';
import { Fragment } from 'react/jsx-runtime';
import { useAddToEnrolledMutation } from 'app/enrolled/enrolled.api.slice';

export default function CourseItem(item: Course) {
  const [AddToEnrolled, { isLoading }] = useAddToEnrolledMutation();

  const navigate = useNavigate();
  const date = parseDate(item.created);
  const enrolled = useSelector(selectMyCourses)

  const isEnrolled = enrolled.some((el) => el.course.id === item.id);

  const handleEnroll = async () => {
    await AddToEnrolled(item.id);
    navigate(`/dashboard/courses/course/${item.id}`)
  }

  return (
    <Grid sx={{ py: 2, px: 1 }}>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          {
            isEnrolled ?
              <Fragment>
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
                  <Tooltip title="Like" variant="soft">
                    <FavoriteIcon />
                  </Tooltip>
                </IconButton>
              </Fragment>
              :
              <Fragment>
                <AspectRatio ratio="2">
                  <img
                    src={item.imageUrl}
                    loading="lazy"
                    alt={`${item.title}`}
                  />
                </AspectRatio>
                <IconButton
                  size="md"
                  variant="solid"
                  sx={{
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    right: '1rem',
                    bottom: 0,
                    transform: 'translateY(50%)',
                  }}
                  onClick={handleEnroll}
                  loading={isLoading}
                >
                  <Tooltip title="Enroll" variant="soft">
                    <LoginIcon />
                  </Tooltip>
                </IconButton>
              </Fragment>
          }
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