import { ChangeEvent } from "react";
import { Box, Typography, Sheet, Input, Divider } from "@mui/joy"
import { SearchRounded } from "@mui/icons-material"
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import { useSearchParams } from 'react-router-dom';

import CourseList from "./components/courseList"
import BreadcrumbsCustom from "shared/components/breadcrumbsCustom"
import { useFilterCoursesMutation, useSortCoursesMutation } from "app/api/courses.api.slice";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [FilterCourses] = useFilterCoursesMutation();
  const [SortCourses] = useSortCoursesMutation();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQueryValue: string = event.target.value;

    searchParams.set('search', searchQueryValue);
    setSearchParams(searchParams);

    FilterCourses(searchQueryValue);
  };

  const handleSortChange = (_: unknown, value: string | null) => {
    if (value) {
      searchParams.set('sort', value);
      setSearchParams(searchParams);

      SortCourses(value);
    }
  }

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
          placeholder="Search.."
          startDecorator={<SearchRounded color="primary" />}
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
          <Option value="ASC">Date ascending</Option>
          <Option value="DESC">Date descending</Option>
        </Select>
      </Sheet>
      <Divider sx={{ my: 2 }} />
      <CourseList />
    </Box>
  )
}