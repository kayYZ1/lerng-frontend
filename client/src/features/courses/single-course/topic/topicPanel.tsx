import { useParams } from 'react-router-dom';
import { Sheet, Box } from "@mui/joy"

import ContentList from "./components/contentList"
import { useGetContentsQuery } from 'app/contents/contents.api.slice';
import ContentPanel from './components/contentPanel';

export default function TopicPanel() {
  const { id } = useParams<{ id: string }>();
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
      <Sheet sx={{ my: 2, px: 2, py: 2 }}>
        {isLoading ? "LOADING..." : <ContentList contents={data} />}
        {error ? "ERROR WHILE LOADING..." : ""}
      </Sheet>
      <Sheet sx={{ my: 2, px: 2, py: 2, mx: { sm: 2, md: 2 } }}>
        <ContentPanel />
      </Sheet>
    </Box>
  )
}