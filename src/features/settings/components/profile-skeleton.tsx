import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Skeleton from '@mui/joy/Skeleton';

export default function ProfileSkeleton() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 'max(700px, 60%)',
        height: 'max(400px, 60%)',
        borderRadius: 0,
        '--Card-radius': 0,
      }}
    >
      <CardContent orientation="horizontal">
        <Skeleton variant="rectangular" width={44} height={44} />
        <div>
          <Skeleton variant="text" width={100} />
          <Skeleton level="body-sm" variant="text" width={200} />
        </div>
      </CardContent>
      <CardContent sx={{ gap: 0.5, mt: 1 }}>
        <Skeleton level="body-xs" variant="text" width="92%" />
        <Skeleton level="body-xs" variant="text" width="99%" />
        <Skeleton level="body-xs" variant="text" width="96%" />
      </CardContent>
    </Card>
  );
}
