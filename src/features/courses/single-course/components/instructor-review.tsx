import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function InstructorReview() {
  return (
    <Card
      sx={{
        boxShadow: 'lg',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mr: 2,
        p: 3,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography level="title-lg">Your Review</Typography>
        <Typography level="body-md">
          You can't grade your own course
        </Typography>
      </CardContent>
    </Card>
  );
}
