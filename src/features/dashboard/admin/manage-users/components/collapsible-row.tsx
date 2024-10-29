import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import { useGetCoursesForUserQuery } from 'app/api/enrolled.api.slice';
import { EnrolledCourses } from 'shared/ts/types';
import { parseDate } from 'shared/lib/functions';

export default function CollapsibleRow({ userId }: { userId: string }) {
  const { data: userCourses } = useGetCoursesForUserQuery(userId); // Fix

  return (
    <Sheet
      variant="soft"
      sx={{
        p: 1,
        pl: 6,
        boxShadow: 'inset 0 3px 6px 0 rgba(0 0 0 / 0.08)',
      }}
    >
      <Typography level="body-lg" component="div">
        Courses
      </Typography>
      {userCourses && userCourses.length !== 0 ? (
        <Table borderAxis="bothBetween" size="sm">
          <thead>
            <tr>
              <th>Course</th>
              <th>Description</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {userCourses.map((course: EnrolledCourses) => (
              <tr key={course.id}>
                <td>{course.course.title}</td>
                <td>{course.course.description}</td>
                <td>{parseDate(course.course.created)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Typography level="body-sm" component="div">
          User have not joined any courses yet.
        </Typography>
      )}
    </Sheet>
  );
}
