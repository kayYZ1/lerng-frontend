import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import Avatar from '@mui/joy/Avatar';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import BreadcrumbsCustom from 'shared/components/breadcrumbs-custom';
import TicketsTable from './tickets-table';
import AddTicket from './add-ticket';

import { useGetEnrolledCoursesQuery } from 'app/api/enrolled.api.slice';
import EnrolledListSkeleton from './components/skeletons/enrolled-list';

export default function Feedback() {
  const { data: enrolledCourses, isLoading } =
    useGetEnrolledCoursesQuery('Enrolled');

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          Feedback
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        px={6}
        display="flex"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        gap={5}
      >
        <Box>
          <Typography level="h4" component="h3" sx={{ pb: 1 }}>
            Courses
          </Typography>
          <List
            sx={{
              width: { xs: 300, md: 400 },
              '--ListItemDecorator-size': '56px',
              gap: 1,
            }}
          >
            {isLoading
              ? [1, 2, 3].map((x) => <EnrolledListSkeleton key={x} />)
              : enrolledCourses &&
                enrolledCourses.map((enrolled) => (
                  <ListItem
                    endAction={<AddTicket {...enrolled} />}
                    key={enrolled.id}
                  >
                    <ListItemDecorator>
                      <Avatar src={enrolled.course.imageUrl} />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="title-sm">
                        {enrolled.course.title}
                      </Typography>
                      <Typography level="body-sm" noWrap>
                        {enrolled.course.description.length > 35
                          ? enrolled.course.description.slice(0, 35) +
                            '...'
                          : enrolled.course.description}
                      </Typography>
                    </ListItemContent>
                  </ListItem>
                ))}
          </List>
        </Box>
        <Box maxWidth={1200}>
          <Typography level="h4" component="h3" sx={{ pb: 1 }}>
            My Tickets
          </Typography>
          <Sheet
            sx={{
              display: { xs: 'flex' },
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'space-between', sm: 'flex-start' },
            }}
          ></Sheet>
          <TicketsTable />
        </Box>
      </Box>
    </Box>
  );
}
