import { Box, Typography, Divider, Sheet, Input, Avatar } from "@mui/joy"
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import SearchIcon from "@mui/icons-material/Search";

import BreadcrumbsCustom from "shared/components/breadcrumbsCustom"
import TicketsTable from "./ticketsTable"
import AddTicket from "./addTicket"

import { useGetEnrolledCoursesQuery } from "app/api/enrolled.api.slice";
import { EnrolledCourses } from "shared/ts/types";
import EnrolledListSkeleton from "./components/enrolledListSkeleton";

export default function Feedback() {
  const { data, isLoading } = useGetEnrolledCoursesQuery(undefined);

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          Feedback
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box px={6} display="flex" sx={{ flexDirection: { xs: 'column', sm: 'row' } }} gap={5}>
        <Box>
          <Typography level="h4" component="h3" sx={{ pb: 1 }}>
            Courses
          </Typography>
          <List
            sx={{
              width: { xs: 300, md: 400 },
              '--ListItemDecorator-size': '56px',
              gap: 1
            }}
          >
            {
              isLoading ? [1, 2, 3].map(x => (
                <EnrolledListSkeleton key={x} />
              )) : data.map((enrolled: EnrolledCourses) => (
                <ListItem
                  endAction={
                    <AddTicket {...enrolled} />
                  }
                  key={enrolled.id}
                >
                  <ListItemDecorator>
                    <Avatar src={enrolled.course.imageUrl} />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography level="title-sm">{enrolled.course.title}</Typography>
                    <Typography level="body-sm" noWrap>
                      {enrolled.course.description}
                    </Typography>
                  </ListItemContent>
                </ListItem>
              ))
            }
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
          >
          </Sheet>
          <TicketsTable />
        </Box>
      </Box>
    </Box>
  )
}