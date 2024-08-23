import { Fragment } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";
import Sheet from "@mui/joy/Sheet";

import { MovieOutlined } from "@mui/icons-material";

import { selectActiveContent } from "app/slice/contents.slice";

export default function ContentPanel() {
  const activeContent = useSelector(selectActiveContent);
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
          <Box p={2}>
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
                  {/*<ReactPlayer controls pip width="100%" url={activeContent.videoUrl} config={{
                    file: {
                      attributes: {
                        crossOriginIsolated: false
                      }
                    }
                  }} />*/}
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