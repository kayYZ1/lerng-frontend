import { Box, Typography } from "@mui/joy";
import { useSelector } from "react-redux"
import { selectActiveContent } from "app/slice/contents.slice"
import { Fragment } from "react/jsx-runtime";

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
        </Box>
        : "Module not selected."
      }
    </Fragment>
  )
}