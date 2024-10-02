import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Tabs from "@mui/joy/Tabs";
import TabPanel from "@mui/joy/TabPanel";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from '@mui/joy/Tab';

import BreadcrumbsCustom from "shared/components/breadcrumbs-custom.tsx";

export default function AdminPanel() {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box>
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <BreadcrumbsCustom />
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Admin panel
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
              Dashboard
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
              Manage
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={2}>
              App settings
            </Tab>
          </TabList>
          <TabPanel value={0}>
            11
          </TabPanel>
          <TabPanel value={1}>
            22
          </TabPanel>
          <TabPanel value={2}>
            32
          </TabPanel>
        </Tabs>
      </Box>
    </Box >
  )
}