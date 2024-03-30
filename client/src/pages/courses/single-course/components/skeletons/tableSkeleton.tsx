import { Skeleton, Table } from "@mui/joy";

export default function TableSkeleton() {
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
        {[1, 2, 3].map((index) => (
          <tr key={index}>
            <td scope="row">
              <Skeleton animation="wave" variant="text" />
            </td>
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