import ReactPlayer from 'react-player/youtube';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import EditContentModal from './modals/edit-content';
import RemoveContentModal from './modals/remove-content';

import { selectActiveContent } from 'app/slice/contents.slice';
import { selectCurrentUser } from 'app/slice/user.slice';
import { selectActiveCourse } from 'app/slice/courses.slice';
import { useGetInstructorFromCourseQuery } from 'app/api/courses.api.slice';

export default function ContentPanel() {
  const activeContent = useSelector(selectActiveContent);
  const user = useSelector(selectCurrentUser);
  const activeCourse = useSelector(selectActiveCourse);

  const { data: instructor } = useGetInstructorFromCourseQuery(
    activeCourse!,
  );

  return (
    <Fragment>
      {activeContent !== null && (
        <Box sx={{ overflow: 'auto', maxHeight: '65vh', px: 8 }}>
          {instructor && instructor.id === user.id && (
            <Stack direction="row" justifyContent="space-between">
              <EditContentModal {...activeContent} />
              <RemoveContentModal contentId={activeContent.id} />
            </Stack>
          )}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            px={2}
          >
            <Typography level="h1">{activeContent.title}</Typography>
            <Typography>{activeContent.description}</Typography>
          </Stack>
          <Box p={2}>
            <Box>
              <Typography fontWeight={300} py={1}>
                {activeContent.paragraph150}
              </Typography>
              <Typography fontWeight={300} py={1}>
                {activeContent.paragraph300}
              </Typography>
            </Box>
            <Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Sheet variant="soft" sx={{ p: 2, mt: 1, width: '100%' }}>
                  <ReactPlayer
                    pip
                    stopOnUnmount
                    light
                    width="100%"
                    url={activeContent.videoUrl}
                  />
                </Sheet>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Fragment>
  );
}
