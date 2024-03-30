import Stack from '@mui/joy/Stack';

import { CourseModule } from 'shared/types';
import ModuleItem from './moduleItem';

export default function ModulesList({ modules }: { modules: CourseModule[] }) {
  return (
    <Stack
      spacing={2}
      sx={{
        maxWidth: '80ch',
      }}
    >
      {modules.map((item: CourseModule) => (
        <ModuleItem {...item} key={item.id} />
      ))}
    </Stack>
  )
}