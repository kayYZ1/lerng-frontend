import { Topic } from "shared/ts/types";
import { Card, Typography, Box, Button } from "@mui/joy";
import { Link } from "react-router-dom";

export default function TopicItem(item: Topic) {
  return (
    <Card>
      <Typography level="title-lg">
        {item.title}
      </Typography>
      <Typography level="body-md">
        {item.description}
      </Typography>
      <Box sx={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
        <Button color="primary">
          <Link to={`/dashboard/courses/course/topic/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            Go
          </Link>
        </Button>
      </Box>
    </Card>
  )
}