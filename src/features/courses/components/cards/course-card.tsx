import { Fragment } from 'react/jsx-runtime';
import { useNavigate } from 'react-router-dom';

import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';

import LoginIcon from '@mui/icons-material/Login';

import { Course } from 'shared/ts/types';
import { useAddToEnrolledMutation } from 'app/api/enrolled.api.slice';

export default function CourseCard(item: Course) {
  const navigate = useNavigate();
  const [AddToEnrolled, { isLoading }] = useAddToEnrolledMutation();

  const handleEnroll = async () => {
    await AddToEnrolled(item.id);
    navigate(`/dashboard/courses/course/${item.id}`);
  };

  return (
    <Fragment>
      <AspectRatio ratio="2">
        <img src={item.imageUrl} loading="lazy" alt={`${item.title}`} />
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
  );
}
