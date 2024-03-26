import { CourseModuleItem } from "shared/types";
import { Card, Typography, Box, Button } from "@mui/joy";

export default function ModuleItem(item: CourseModuleItem) {
  return (
    <Card>
      <Typography level="title-lg">
        {item.title}
      </Typography>
      <Typography level="body-md">
        This is the description of the component that contain some information of
        it
      </Typography>
      <Box sx={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
        <Button color="primary">
          Enter
        </Button>
      </Box>
    </Card>
  )
}