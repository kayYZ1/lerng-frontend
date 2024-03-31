import { Box, Typography, Tabs, TabPanel, TabList } from "@mui/joy"
import Tab, { tabClasses } from '@mui/joy/Tab';
import ManageCourses from "./components/manage-courses";
import Statistics from "./components/statistics";

export default function DashboardPanel() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box>
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Typography level="h2" component="h1" sx={{ mt: 4, mb: 2 }}>
            Admin dashboard
          </Typography>
        </Box>
        <Tabs
          defaultValue={0}
          sx={{
            bgcolor: 'transparent',
          }}
        >
          <TabList
            tabFlex={1}
            size="sm"
            sx={{
              pl: { xs: 0, md: 4 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
              Manage Courses
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
              Statistics
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <ManageCourses />
          </TabPanel>
          <TabPanel value={1}>
            <Statistics />
          </TabPanel>
        </Tabs>
      </Box>
    </Box >
  )
}