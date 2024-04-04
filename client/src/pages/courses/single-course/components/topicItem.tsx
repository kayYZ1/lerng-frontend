import { Topic } from "shared/types";
import { Card, Typography, Box, Button } from "@mui/joy";
import { Link } from "react-router-dom";

export default function TopicItem(item: Topic) {
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
          <Link to={`/dashboard/courses/course/module/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            Enter
          </Link>
        </Button>
      </Box>
    </Card>
  )
}