import Table from '@mui/joy/Table';
import Box from '@mui/joy/Box';

import { useGetProgressQuery } from 'app/api/progress.api.slice';

import TableSkeleton from './skeletons/table';

export default function ProgressTable({ id }: { id: string | undefined }) {
  const { data: progressArray, isLoading } = useGetProgressQuery(id!);

  return (
    <Box>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <Table borderAxis="both">
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Module name</th>
              <th>Percentage</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {progressArray &&
              progressArray.map((progress) => (
                <tr key={progress.id}>
                  <td>{progress.title}</td>
                  <td>{progress.scorePercentage}%</td>
                  <td>{progress.quizScore}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </Box>
  );
}
