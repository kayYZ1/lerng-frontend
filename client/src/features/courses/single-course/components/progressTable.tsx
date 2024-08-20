import { useParams } from 'react-router-dom';
import Table from '@mui/joy/Table';
import { Progress } from 'shared/ts/types';
import { useGetProgressQuery } from 'app/api/progress.api.slice';
import { Box } from '@mui/joy';
import TableSkeleton from './skeletons/tableSkeleton';

export default function ProgressTable() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProgressQuery(id!);

  return (
    <Box>
      {isLoading ? <TableSkeleton /> :
        <Table borderAxis="both">
          <caption>Progress table for this course</caption>
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Module name</th>
              <th>Progress</th>
              <th>Quiz Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((progress: Progress) => (
              <tr key={progress.id}>
                <td>{progress.title}</td>
                <td>{progress.progress}%</td>
                <td>{progress.quizScore}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      }
    </Box>
  )
}