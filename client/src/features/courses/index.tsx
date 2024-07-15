import { Box, Typography, Sheet, Input, IconButton, Divider } from "@mui/joy"
import { SearchRounded } from "@mui/icons-material"
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import { useSearchParams } from 'react-router-dom';

import CourseList from "./components/courseList"
import BreadcrumbsCustom from "shared/components/breadcrumbsCustom"

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = (event: any) => {
    const searchQuery = event.target.value;
    if (searchQuery) {
      searchParams.set('search', searchQuery);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (event: any) => {
    const sortValue = event.target.value;
    searchParams.set('sort', sortValue);
    setSearchParams(searchParams);
  };

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          Courses
        </Typography>
      </Box>
      <Sheet
        sx={{
          display: { xs: 'flex' },
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 2 }
        }}
      >
        <Input
          size="sm"
          placeholder="Search anything…"
          startDecorator={<SearchRounded color="primary" />}
          endDecorator={
            <IconButton
              variant="outlined"
            >
              <Typography level="title-sm" textColor="text.icon">
                ⌘ K
              </Typography>
            </IconButton>
          }
          onChange={handleSearchChange}
        />
        <Select
          size='sm'
          placeholder="Sort by..."
          sx={{
            minWidth: '15rem',
          }}
          slotProps={{
            listbox: {
              sx: {
                width: '100%',
              },
            },
          }}
          onChange={handleSortChange}
        >
          <Option value="dateAsc">Date ascending</Option>
          <Option value="dateDesc">Date descending</Option>
        </Select>
      </Sheet>
      <Divider sx={{ my: 2 }} />
      <CourseList />
    </Box>
  )
}