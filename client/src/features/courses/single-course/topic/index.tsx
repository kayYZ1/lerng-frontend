import { useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/joy";

import TypographySkeleton from "../components/skeletons/typographySkeleton";
import { useGetTopicQuery } from "app/api/topics.api.slice";
import TopicPanel from "./topicPanel";
import BreadcrumbsCustom from "shared/components/breadcrumbsCustom";

export default function Topic() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetTopicQuery(id!);

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{
        mx: { xs: 5, md: 8 }
      }}
      >
        <BreadcrumbsCustom />
        <Typography level="h2" sx={{ mt: 1, mb: 1 }}>
          {isLoading ? <TypographySkeleton /> : data.title}
          {error ? "Something went wrong please refresh" : ""}
        </Typography>
        <Typography level="body-md">
          {isLoading ? <TypographySkeleton /> : data.description}
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ flex: 1 }}>
        <TopicPanel />
      </Box>
    </Box>
  )
}