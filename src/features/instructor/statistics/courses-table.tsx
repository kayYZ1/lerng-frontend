import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

import { useGetInstructorStatisticsQuery } from 'app/api/enrolled.api.slice';
import StatisticsSkeleton from './statistics-skeleton';

export default function CoursesTable() {
  const { data: statistics, isLoading } =
    useGetInstructorStatisticsQuery('Statistics');

  return (
    <Sheet variant="outlined">
      {isLoading ? (
        <StatisticsSkeleton />
      ) : (
        <Table variant="soft" borderAxis="bothBetween">
          <thead>
            <tr>
              <th style={{ width: '30%' }}>Course name</th>
              <th>Active enrolled users</th>
              <th>Course rating</th>
            </tr>
          </thead>
          <tbody>
            {statistics &&
              statistics.map((row) => (
                <tr key={row.course}>
                  <th scope="row">{row.course}</th>
                  <td>{row.count}</td>
                  <td>{row.rating}/5</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Average</th>
              <td>:)</td>
              <td>:(</td>
            </tr>
          </tfoot>
        </Table>
      )}
    </Sheet>
  );
}
