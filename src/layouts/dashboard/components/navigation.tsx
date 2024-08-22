import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';

import RoleBasedList from '../utils/roleBasedList';

export default function Navigation() {
  return (
    <List
      size="sm"
      sx={{ position: 'fixed', '--ListItem-radius': 'var(--joy-radius-sm)', '--List-gap': '4px' }}
    >
      <ListItem nested>
        <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
          Browse
        </ListSubheader>
        <RoleBasedList />
      </ListItem>
    </List>
  );
}