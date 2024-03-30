import { useParams } from 'react-router-dom';
import Sheet from '@mui/joy/Sheet';
import { Box, Table } from '@mui/joy';
import { useSelector } from 'react-redux';

import ProgressTable from './components/progressTable';
import ModulesList from './components/modulesList';
import ModuleItemSkeleton from './components/skeletons/moduleItemSkeleton';

import { selectModules } from 'features/modules/modules.slice';
import { useGetModulesInCourseQuery } from 'features/modules/modules.api.slice';
import TableSkeleton from './components/skeletons/tableSkeleton';

export default function ModulesPanel() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error } = useGetModulesInCourseQuery(id!);
  const modules = useSelector(selectModules)

  return (
    <Sheet
      sx={{
        flex: 1,
        width: '100%',
        px: { xs: 2, md: 6 },
        mx: 'auto',
        pt: { xs: 'var(--Header-height)', sm: 0 },
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'minmax(min-content, min(50%, 1000px)) 1fr',
        },
      }}
    >
      <Box sx={{ px: 2, py: 2 }}>
        {isLoading ? <ModuleItemSkeleton /> : <ModulesList modules={modules} />}
      </Box>
      <Box sx={{ px: 2, py: 2 }}>
        {isLoading ? <TableSkeleton /> : <ProgressTable modules={modules} />}
      </Box>
      {error ? "Something went wrong please refresh" : ""}
    </Sheet>
  )
}