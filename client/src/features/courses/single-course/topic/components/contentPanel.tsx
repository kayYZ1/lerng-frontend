import { Box, Stack, Typography, Divider, Chip, Sheet } from "@mui/joy";
import { useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";
import ReactPlayer from "react-player/lazy";

import { selectActiveContent } from "app/slice/contents.slice"
import { MovieOutlined } from "@mui/icons-material";

export default function ContentPanel() {
  const activeContent = useSelector(selectActiveContent);
  console.log(activeContent)

  return (
    <Fragment>
      {activeContent !== null ?
        <Box sx={{ overflow: "auto", maxHeight: "75vh" }}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} px={2}>
            <Typography level="h1">
              {activeContent.title}
            </Typography>
            <Typography>
              {activeContent.description}
            </Typography>
          </Stack>
          <Box mx={2} my={2}>
            <Box sx={{ textAlign: "center" }}>
              <Divider>
                <Chip variant="soft" color="neutral" size="sm">
                  1
                </Chip>
              </Divider>
              <Typography fontWeight={300} py={1}>
                {activeContent.paragraph150}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Divider>
                <Chip variant="soft" color="neutral" size="sm">
                  2
                </Chip>
              </Divider>
              <Typography fontWeight={300} py={1}>
                {activeContent.paragraph300}
              </Typography>
            </Box>
            <Box>
              <Divider>
                <Chip variant="soft" color="neutral" size="sm">
                  <MovieOutlined />
                </Chip>
              </Divider>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Sheet variant="soft" sx={{ p: 1, m: 1 }}>
                  <ReactPlayer controls pip width="100%" url={activeContent.videoUrl} />
                </Sheet>
              </Box>
            </Box>
          </Box >
        </Box >
        : "Module not selected."
      }
    </Fragment >
  )
}