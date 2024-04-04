import { Box, Typography } from "@mui/joy";
import { useSelector } from "react-redux"
import { selectActiveContent } from "features/contents/contents.slice"

export default function ContentPanel() {
  const activeContent = useSelector(selectActiveContent);

  return (
    <>
      {activeContent !== null ?
        <Box>
          <Typography level="h3">{activeContent.title}</Typography>
          <Typography level="title-md">{activeContent.description}</Typography>
          <Typography level="title-sm">{activeContent.textFirst}</Typography>
          <Typography level="title-sm">{activeContent.textSecond}</Typography>
        </Box>
        : "Module not selected."
      }
    </>
  )
}