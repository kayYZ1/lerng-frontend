import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import CircularProgress from '@mui/joy/CircularProgress';
import Snackbar from '@mui/joy/Snackbar';
import Skeleton from '@mui/joy/Skeleton';

import LoginIcon from '@mui/icons-material/Login';

import { Course } from 'shared/ts/types';
import { useAddToEnrolledMutation } from 'app/api/enrolled.api.slice';

export default function CourseCard({ item }: {item: Course}) {
  const navigate = useNavigate();
  const [addToEnrolled, { isLoading }] = useAddToEnrolledMutation();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleEnroll = async () => {
    try {
      await addToEnrolled(item.id);
      navigate(`/dashboard/courses/course/${item.id}`);
    } catch (error) {
      console.error('Enrollment failed:', error);
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        key={'bottom' + 'center'}
      >
        Enrollment failed
      </Snackbar>
      <AspectRatio ratio="2" sx={{ position: 'relative' }}>
        {!imageLoaded && (
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              bgcolor: 'neutral.200',
            }}
          />
        )}

        <img
          src={item.imageUrl}
          loading="eager"
          alt={item.title}
          onLoad={() => setImageLoaded(true)}
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
          }}
        />
      </AspectRatio>

      <Tooltip
        title={isLoading ? 'Enrolling...' : 'Enroll'}
        variant="soft"
        placement="top"
      >
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
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size="sm" thickness={2} variant="plain" />
          ) : (
            <LoginIcon />
          )}
        </IconButton>
      </Tooltip>
    </>
  );
}

