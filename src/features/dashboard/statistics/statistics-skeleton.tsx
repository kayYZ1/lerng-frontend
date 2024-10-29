import Skeleton from '@mui/joy/Skeleton';
import Table from '@mui/joy/Table';

export default function StatisticsSkeleton() {
  return (
    <Table variant="soft" borderAxis="bothBetween">
      <thead>
        <tr>
          <th style={{ width: '30%' }}>Course name</th>
          <th>Active enrolled users</th>
          <th>AVG Review</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((index) => (
          <tr key={index}>
            <th scope="row">Title</th>
            <td scope="row">
              <Skeleton animation="wave" variant="text" />
            </td>
            <td scope="row">
              <Skeleton animation="wave" variant="text" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
