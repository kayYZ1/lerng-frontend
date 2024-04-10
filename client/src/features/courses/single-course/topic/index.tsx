import { useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/joy";

import TypographySkeleton from "../components/skeletons/typographySkeleton";
import { useGetTopicQuery } from "app/topics/topics.api.slice";
import ModulePanel from "./topicPanel";

export default function Topic() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetTopicQuery(id!);

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{
        display: "flex",
        mb: 1,
        gap: 1,
        flexDirection: { xs: 'column', sm: 'column' },
        alignItems: { xs: 'start', sm: 'start' },
        mx: { xs: 5, md: 8 }
      }}
      >
        <Typography level="h2" sx={{ mt: 4 }}>
          {isLoading ? <TypographySkeleton /> : data.title}
          {error ? "Something went wrong please refresh" : ""}
        </Typography>
        <Typography level="body-md">
          {isLoading ? <TypographySkeleton /> : data.description}
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ flex: 1 }}>
        <ModulePanel />
      </Box>
    </Box>
  )
}