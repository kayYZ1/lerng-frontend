import { useSearchParams } from 'react-router-dom';

import { useGetEnrolledCoursesQuery } from 'app/api/enrolled.api.slice';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Input from '@mui/joy/Input';
import Divider from '@mui/joy/Divider';

import SearchRounded from '@mui/icons-material/SearchRounded';

import EnrolledList from './components/enrolled-list';
import BreadcrumbsCustom from 'shared/components/breadcrumbs-custom';
import { TEnrolled } from 'shared/ts/types';

export default function Enrolled() {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const { data: enrolled, isLoading } =
    useGetEnrolledCoursesQuery('Enrolled');

  const query = searchParams.get('query') || '';

  const filteredCourses: TEnrolled[] =
    query.length > 3 && enrolled
      ? enrolled.filter((enrolled: TEnrolled) =>
          enrolled.course.title
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
      : (enrolled as TEnrolled[]);

  return (
    <Box
      sx={{
        flex: 1,
        width: '99%',
      }}
    >
      <Box
        sx={{
          px: {
            xs: 4,
            md: 6,
          },
        }}
      >
        <BreadcrumbsCustom />
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          My courses
        </Typography>
      </Box>
      <Sheet
        sx={{
          display: { xs: 'flex' },
          gap: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          px: { xs: 4, sm: 4, md: 6, lg: 6 },
          py: { xs: 2, md: 2 },
        }}
      >
        <Input
          size="sm"
          sx={{ width: '20em' }}
          placeholder="Search through enrolled..."
          value={query}
          onChange={(event) =>
            setSearchParams(
              (prev) => {
                prev.set('query', event.target.value);
                return prev;
              },
              { replace: true },
            )
          }
          startDecorator={<SearchRounded color="primary" />}
        />
      </Sheet>
      <Divider sx={{ my: 2 }} />
      <EnrolledList data={filteredCourses} isLoading={isLoading} />
    </Box>
  );
}
