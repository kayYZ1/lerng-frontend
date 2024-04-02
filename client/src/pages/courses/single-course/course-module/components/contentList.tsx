import List from '@mui/joy/List';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import { Content } from 'shared/types';

export default function ContentList({ contents }: { contents: Content[] }) {
  return (
    <List
      component="nav"
      sx={{
        maxWidth: 400,
      }}
    >
      {contents.map((content: Content, index: number) => (
        <ListItemButton key={content.id}>
          <ListItemDecorator>
            {index + 1}
          </ListItemDecorator>
          {content.title}
        </ListItemButton>
      ))}
    </List>
  );
}