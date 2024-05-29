import { Box, Typography } from "@mui/joy";
import { useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";
import ReactPlayer from "react-player/lazy";

import { selectActiveContent } from "app/slice/contents.slice"

export default function ContentPanel() {
  const activeContent = useSelector(selectActiveContent);

  return (
    <Fragment>
      {activeContent !== null ?
        <Box sx={{ overflow: "auto", maxHeight: "75vh" }}>
          <Typography level="h3">{activeContent.title}</Typography>
          <Typography level="title-md">{activeContent.description}</Typography>
          <Typography level="title-sm">{activeContent.paragraph150}</Typography>
          <Typography level="title-sm">{activeContent.paragraph300}</Typography>
          {activeContent.videoUrl ? <ReactPlayer url={activeContent.videoUrl} controls={true} /> : ""}
        </Box>
        : "Module not selected."
      }
    </Fragment>
  )
}