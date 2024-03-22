import { Card, AspectRatio, Skeleton, Typography } from "@mui/joy"

export default function CourseSkeleton() {
  return (
    <Card variant="outlined" sx={{ py: 2, mx: 1, width: 320, gap: 1 }}>
      <AspectRatio ratio="21/9">
        <Skeleton variant="overlay">
          <img
            alt=""
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          />
        </Skeleton>
      </AspectRatio>
      <Typography>
        <Skeleton>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and
          publishing industries.
        </Skeleton>
      </Typography>
    </Card>
  )
}