import Table from '@mui/joy/Table';
import { CourseModule } from 'shared/types';

export default function ProgressTable({ modules }: { modules: CourseModule[] }) {
  return (
    <Table borderAxis="both">
      <caption>Progress table for this course</caption>
      <thead>
        <tr>
          <th style={{ width: '50%' }}>Module name</th>
          <th>Progress&nbsp;(%)</th>
          <th>Points&nbsp;(_ / 5)</th>
        </tr>
      </thead>
      <tbody>
        {modules.map((item: CourseModule) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>?? / %</td>
            <td>? / 5</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Totals</th>
          <td>??% course progress</td>
          <td>points / maximum points</td>
        </tr>
      </tfoot>
    </Table>
  )
}