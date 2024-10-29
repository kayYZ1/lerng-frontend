import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';

import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { Course } from 'shared/ts/types';

import style from '../../courses.module.css';

export default function InstructorCard(item: Course) {
  return (
    <Fragment>
      <AspectRatio ratio="2">
        <Link
          to={`/dashboard/courses/course/${item.id}`}
          className={style.link}
        >
          <img src={item.imageUrl} loading="lazy" alt={`${item.title}`} />
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
        <Tooltip title="You are the owner of this course!" variant="soft">
          <AdminPanelSettingsIcon />
        </Tooltip>
      </IconButton>
    </Fragment>
  );
}
