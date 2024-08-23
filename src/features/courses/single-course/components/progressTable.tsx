import { useParams } from 'react-router-dom';

import Table from '@mui/joy/Table';
import Box from '@mui/joy/Box';

import { Progress } from 'shared/ts/types';
import { useGetProgressQuery } from 'app/api/progress.api.slice';

import TableSkeleton from './skeletons/tableSkeleton';

export default function ProgressTable() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProgressQuery(id!);

  console.log(data)

  return (
    <Box>
      {isLoading ? <TableSkeleton /> :
        <Table borderAxis="both">
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Module name</th>
              <th>Percentage</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((progress: Progress) => (
              <tr key={progress.id}>
                <td>{progress.title}</td>
                <td>{progress.scorePercentage}%</td>
                <td>{progress.quizScore}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      }
    </Box>
  )
}