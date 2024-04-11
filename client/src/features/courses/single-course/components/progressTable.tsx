import { useParams } from 'react-router-dom';
import Table from '@mui/joy/Table';
import { Progress } from 'shared/ts/types';
import { useGetProgressQuery } from 'app/progress/progress.api.slice';
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
              <th>Progress&nbsp;(%)</th>
              <th>Points&nbsp;(_/5)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((progress: Progress) => (
              <tr key={progress.id}>
                <td>{progress.title}</td>
                <td>{progress.progress}%</td>
                <td>{progress.quizScore}/5</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Totals</th>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
      }
    </Box>
  )
}