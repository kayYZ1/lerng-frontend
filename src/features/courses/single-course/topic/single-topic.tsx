import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import Skeleton from '@mui/joy/Skeleton';

import { useGetContentsQuery } from 'app/api/contents.api.slice';

import ContentList from './components/content-list';
import ContentPanel from './components/content-panel';
import { IdProps } from '../shared/types';

export default function SingleTopic({ id }: IdProps) {
  const { data, isLoading, error } = useGetContentsQuery(id!);

  return (
    <Box
      sx={{
        flex: 1,
        width: '100%',
        px: { xs: 2, md: 6 },
        mx: 'auto',
        pt: { xs: 'var(--Header-height)', sm: 0 },
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'minmax(min-content, min(25%, 1000px)) 1fr',
        },
      }}
    >
      <Sheet sx={{ my: 2, px: 2 }}>
        {isLoading ? (
          <Box mb={8}>
            {[1, 2, 3].map((x) => (
              <Skeleton
                variant="rectangular"
                width={320}
                height="1em"
                sx={{ mb: 1 }}
                key={x}
              />
            ))}
          </Box>
        ) : (
          <ContentList contents={data} />
        )}
        {error
          ? 'Could not load the contents of the list, please try again.'
          : ''}
      </Sheet>
      <Sheet sx={{ my: 2, px: 2, py: 2, mx: { sm: 2, md: 2 } }}>
        <ContentPanel />
      </Sheet>
    </Box>
  );
}
