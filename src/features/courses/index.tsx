import { useSearchParams } from "react-router-dom";

import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Input from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import { SearchRounded } from "@mui/icons-material";

import { useGetCoursesQuery } from "app/api/courses.api.slice";

import CoursesList from "./components/courses-list";
import BreadcrumbsCustom from "shared/components/breadcrumbs-custom";
import { Course } from "shared/ts/types";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams({ query: "", sort: "" });
  const { data, isLoading } = useGetCoursesQuery("Course");

  const query = searchParams.get("query") || "";
  const sort = searchParams.get("sort") || "";

  const filteredCourses: Course[] = query.length > 3 ? data?.filter((course: Course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  ) : data || [];

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sort === "ASC") {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    } else if (sort === "DESC") {
      return new Date(b.created).getTime() - new Date(a.created).getTime();
    }
    return 0;
  });

  return (
    <Box sx={{ flex: 1, width: '99%' }}>
      <Box sx={{ px: { xs: 4, md: 6 } }}>
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
          placeholder="Search..."
          value={query}
          onChange={(event) => setSearchParams(prev => {
            prev.set("query", event.target.value);
            return prev;
          }, { replace: true })}
          startDecorator={< SearchRounded color="primary" />}
        />
        <Select
          size='sm'
          placeholder="Sort by..."
          value={sort}
          onChange={(_, newValue) => setSearchParams(prev => {
            prev.set("sort", newValue as string);
            return prev;
          }, { replace: true })}
          sx={{
            minWidth: { xs: '100%', sm: '200px' },
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
      <CoursesList data={sortedCourses} isLoading={isLoading} />
    </Box>
  )
}