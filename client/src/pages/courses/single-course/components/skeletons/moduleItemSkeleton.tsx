import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Skeleton from '@mui/joy/Skeleton';

export default function ModuleItemSkeleton() {
  return [...Array(2)].map((index) => (
    <Card
      key={index}
      variant="outlined"
      sx={{ width: 'max(80ch)', mt: 1, borderRadius: 0, '--Card-radius': 0 }}
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
  ));
}