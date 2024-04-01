import { useParams } from "react-router-dom"
import { Box, Typography, Divider } from "@mui/joy";

import { useGetCourseQuery } from "features/courses/courses.api.slice";

import ModulesPanel from "./modulesPanel";
import TypographySkeleton from "./components/skeletons/typographySkeleton";

export default function Course() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetCourseQuery(id!);

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{
        display: "flex",
        mb: 1,
        gap: 1,
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'start', sm: 'center' },
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        mx: { xs: 5, md: 8 }
      }}
      >
        <Typography level="h2" component="h1" sx={{ mt: 4, mb: 2 }}>
          {isLoading ? <TypographySkeleton /> : data.title}
          {error ? "Something went wrong please refresh" : ""}
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ flex: 1 }}>
        <ModulesPanel />
      </Box>
    </Box>
  )
}