import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import List from '@mui/joy/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';

import QuizIcon from '@mui/icons-material/Quiz';
import HomeIcon from '@mui/icons-material/Home';

import { Content } from 'shared/ts/types';
import {
  selectActiveContent,
  setActiveContent,
} from 'app/slice/contents.slice';
import { selectCurrentUser } from 'app/slice/user.slice';
import { selectActiveCourse } from 'app/slice/courses.slice';
import { useGetInstructorFromCourseQuery } from 'app/api/courses.api.slice';

import AddContentModal from './modals/add-content';

export default function ContentList({
  contents,
}: {
  contents: Content[];
}) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeContent = useSelector(selectActiveContent);
  const user = useSelector(selectCurrentUser);
  const activeCourse = useSelector(selectActiveCourse);

  const { data: instructor } = useGetInstructorFromCourseQuery(
    activeCourse!,
  );

  useEffect(() => {
    dispatch(setActiveContent(contents[0]));
    return () => {
      dispatch(setActiveContent(null));
    };
  }, [contents, dispatch]);

  return (
    <List
      component="nav"
      sx={{
        maxWidth: 400,
        overflow: 'auto',
      }}
    >
      {instructor && instructor.id === user.id && <AddContentModal />}
      {contents.map((content: Content, index: number) => (
        <ListItemButton
          key={content.id}
          onClick={() => dispatch(setActiveContent(content))}
          selected={
            activeContent && activeContent.id === content.id ? true : false
          }
        >
          <ListItemDecorator sx={{ paddingLeft: 0.7 }}>
            {index + 1}
          </ListItemDecorator>
          {content.title}
        </ListItemButton>
      ))}
      <ListItemButton
        onClick={() =>
          navigate(`/dashboard/courses/course/topic/quiz/${id}`)
        }
      >
        <ListItemDecorator>
          <QuizIcon />
        </ListItemDecorator>
        Quiz
      </ListItemButton>
      <ListItemButton
        onClick={() =>
          navigate(`/dashboard/courses/course/${activeCourse}`)
        }
      >
        <ListItemDecorator>
          <HomeIcon />
        </ListItemDecorator>
        Back to course
      </ListItemButton>
    </List>
  );
}
