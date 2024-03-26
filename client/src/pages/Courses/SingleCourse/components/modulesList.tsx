import { useParams } from 'react-router-dom';
import Stack from '@mui/joy/Stack';

import { useGetModulesInCourseQuery } from 'features/modules/modules.api.slice';
import { CourseModuleItem } from 'shared/types';
import ModuleItem from './moduleItem';
import ModuleItemSkeleton from './moduleItemSkeleton';

export default function ModulesList() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetModulesInCourseQuery(id!);

  return (
    <Stack
      spacing={2}
      sx={{
        maxWidth: '80ch',
      }}
    >
      {isLoading ? <ModuleItemSkeleton /> : data.map((module: CourseModuleItem) => (
        <ModuleItem {...module} key={module.id} />
      ))}
      {error ? "Something went wrong please refresh" : ""}
    </Stack>
  )
}