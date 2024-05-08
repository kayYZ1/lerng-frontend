import { Box, Typography } from "@mui/joy";
import { useSelector } from "react-redux"
import { selectActiveContent } from "app/contents/contents.slice"
import { Fragment } from "react/jsx-runtime";

export default function ContentPanel() {
  const activeContent = useSelector(selectActiveContent);

  return (
    <Fragment>
      {activeContent !== null ?
        <Box>
          <Typography level="h3">{activeContent.title}</Typography>
          <Typography level="title-md">{activeContent.description}</Typography>
          <Typography level="title-sm">{activeContent.paragraph300}</Typography>
          <Typography level="title-sm">{activeContent.paragraph500}</Typography>
          <Typography level="title-sm">{activeContent.paragraph750}</Typography>
        </Box>
        : "Module not selected."
      }
    </Fragment>
  )
}