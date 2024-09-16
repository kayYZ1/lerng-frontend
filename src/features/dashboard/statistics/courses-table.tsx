import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

import { useGetInstructorStatisticsQuery } from 'app/api/enrolled.api.slice';
import StatisticsSkeleton from './statistics-skeleton';

type Statistics = {
  course: string;
  count: number;
}

export default function CoursesTable() {
  const { data: statistics, isLoading } = useGetInstructorStatisticsQuery(undefined);

  return (
    <Sheet variant="outlined">
      {isLoading ?
        <StatisticsSkeleton />
        :
        <Table variant="soft" borderAxis="bothBetween">
          <thead>
            <tr>
              <th style={{ width: '30%' }}>Course name</th>
              <th>Active enrolled users</th>
              <th>User review</th>
            </tr>
          </thead>
          <tbody>
            {statistics.map((row: Statistics) => (
              <tr key={row.course}>
                <th scope="row">{row.course}</th>
                <td>{row.count}</td>
                <td>soon</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Average</th>
              <td>1021</td>
              <td>3.5</td>
            </tr>
          </tfoot>
        </Table>
      }
    </Sheet>
  );
}
