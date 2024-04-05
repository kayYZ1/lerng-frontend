import List from '@mui/joy/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';

import QuizIcon from '@mui/icons-material/Quiz';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Content } from 'shared/types';
import { selectActiveContent, setActiveContent } from 'features/contents/contents.slice';

export default function ContentList({ contents }: { contents: Content[] }) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const activeContent = useSelector(selectActiveContent)

  return (
    <List
      component="nav"
      sx={{
        maxWidth: 400,
      }}
    >
      {contents.map((content: Content, index: number) => (
        <ListItemButton
          key={content.id}
          onClick={() => dispatch(setActiveContent(content))}
          selected={activeContent && activeContent.id === content.id ? true : false}
        >
          <ListItemDecorator>
            {index + 1}
          </ListItemDecorator>
          {content.title}
        </ListItemButton>
      ))}
      <ListItemButton onClick={() => navigate(`/dashboard/courses/course/topic/quiz/${id}`)}>
        <ListItemDecorator>
          <QuizIcon />
        </ListItemDecorator>
        Quiz
      </ListItemButton>
    </List>
  );
}