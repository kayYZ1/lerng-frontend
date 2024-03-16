import { Box, Grid } from "@mui/joy"

import { CardItem } from "./types"
import CourseItem from "./courseItem"

const mockCardData: CardItem[] = [
  { id: 1, title: "Introduction to Linux", img: "https://placehold.co/600x400" },
  { id: 2, title: "Working with bash", img: "https://placehold.co/600x400" },
  { id: 3, title: "Development environment in Linux systems", img: "https://placehold.co/600x400" },
  { id: 4, title: "Relational databases in Linux", img: "https://placehold.co/600x400" },
  { id: 5, title: "Procesess", img: "https://placehold.co/600x400" },
  { id: 6, title: "Procesess", img: "https://placehold.co/600x400" }
]

export default function CourseList() {
  return (
    <Box sx={{
      display: 'flex',
    }}>
      <Grid
        container
        direction="row"
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          flexWrap: "wrap",
          px: 2
        }}
      >
        {mockCardData.map((card: CardItem) => (
          <CourseItem {...card} key={card.id} />
        ))}
      </Grid>
    </Box>
  )
}