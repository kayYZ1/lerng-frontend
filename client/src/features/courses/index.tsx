import { Box, Typography, Sheet, Input, IconButton, Divider } from "@mui/joy"
import { SearchRounded } from "@mui/icons-material"
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import { useSearchParams } from 'react-router-dom';

import CourseList from "./components/courseList"
import BreadcrumbsCustom from "shared/components/breadcrumbsCustom"
import { useFilterCoursesQuery } from "app/api/courses.api.slice";
import { useState } from "react";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const { refetch } = useFilterCoursesQuery(searchQuery, {
    skip: searchQuery.length <= 3,
  });

  const handleSearchChange = (event: any) => {
    const searchQueryValue: string = event.target.value;
    setSearchQuery(searchQueryValue);

    searchParams.set('search', searchQuery);
    setSearchParams(searchParams);

    if (searchQuery.length > 3) {
      refetch();
    }
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
        >
          <Option value="ASC">Date ascending</Option>
          <Option value="DESC">Date descending</Option>
        </Select>
      </Sheet>
      <Divider sx={{ my: 2 }} />
      <CourseList />
    </Box>
  )
}