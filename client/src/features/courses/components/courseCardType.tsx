import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Tooltip from "@mui/joy/Tooltip";

import LoginIcon from '@mui/icons-material/Login';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { Link, useNavigate } from 'react-router-dom';

import { Course } from 'shared/ts/types';

import style from "../courses.module.css"
import { useSelector } from 'react-redux';
import { Fragment } from 'react/jsx-runtime';
import { selectCurrentUser } from 'app/slice/user.slice';
import { useAddToEnrolledMutation } from 'app/api/enrolled.api.slice';

interface ICourseEnrolled {
  isEnrolled: boolean;
  item: Course;
}

export default function CourseCardType({ isEnrolled, item }: ICourseEnrolled) {
  const user = useSelector(selectCurrentUser);
  console.log(item)

  if (user.role === 'instructor') {
    return <CourseCardInstructor {...item} />
  }
  else {
    if (isEnrolled) {
      return <CourseCardEnrolled {...item} />
    }
    else {
      return <CourseCardEnroll {...item} />
    }
  }
}

function CourseCardEnrolled(item: Course) {
  return (
    <Fragment>
      <AspectRatio ratio="2" >
        <Link to={`/dashboard/courses/course/${item.id}`} className={style.link}>
          <img
            src={item.imageUrl}
            loading="lazy"
            alt={`${item.title}`}
          />
        </Link>
      </AspectRatio >
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
  )
}

function CourseCardEnroll(item: Course) {
  const navigate = useNavigate();
  const [AddToEnrolled, { isLoading }] = useAddToEnrolledMutation();

  const handleEnroll = async () => {
    await AddToEnrolled(item.id);
    navigate(`/dashboard/courses/course/${item.id}`)
  }

  return (
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
    </Fragment >
  )
}

function CourseCardInstructor(item: Course) {
  return (
    <Fragment>
      <AspectRatio ratio="2" >
        <Link to={`/dashboard/courses/course/${item.id}`} className={style.link}>
          <img
            src={item.imageUrl}
            loading="lazy"
            alt={`${item.title}`}
          />
        </Link>
      </AspectRatio >
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
        <Tooltip title="You are the owner of this course!" variant="soft">
          <AdminPanelSettingsIcon />
        </Tooltip>
      </IconButton>
    </Fragment>
  )
}