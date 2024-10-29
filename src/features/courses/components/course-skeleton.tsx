import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';

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
          Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries.
        </Skeleton>
      </Typography>
    </Card>
  );
}
