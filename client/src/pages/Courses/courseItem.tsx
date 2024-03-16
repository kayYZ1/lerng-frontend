import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';

import { CardItem } from './types';
import { Grid } from '@mui/joy';

export default function CourseItem(item: CardItem) {
  return (
    <Grid sx={{ py: 2, px: 1 }}>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={item.img}
              loading="lazy"
              alt={`${item.id}`}
            />
          </AspectRatio>
          <IconButton
            aria-label="Like minimal photography"
            size="md"
            variant="solid"
            color="danger"
            sx={{
              position: 'absolute',
              zIndex: 2,
              borderRadius: '50%',
              right: '1rem',
              bottom: 0,
              transform: 'translateY(50%)',
            }}
          >
            <Favorite />
          </IconButton>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">
            <Link href="#multiple-actions" overlay underline="none">
              {item.title.length > 38 ? `${item.title.substring(0, 33)}...` : item.title}
            </Link>
          </Typography>
          <Typography level="body-sm">
            <Link href="#multiple-actions">California</Link>
          </Typography>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs">6.3k views</Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs">1 hour ago</Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </Grid>
  )
}