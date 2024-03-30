import Table from '@mui/joy/Table';

export default function ProgressTable() {
  return (
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th style={{ width: '50%' }}>Module name</th>
          <th>Progress&nbsp;(%)</th>
          <th>Points&nbsp;(x/5)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frozen yoghurt</td>
          <td>159</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Ice cream sandwich</td>
          <td>237</td>
          <td>9</td>
        </tr>
        <tr>
          <td>Eclair</td>
          <td>262</td>
          <td>16</td>
        </tr>
        <tr>
          <td>Cupcake</td>
          <td>305</td>
          <td>3.7</td>
        </tr>
        <tr>
          <td>Gingerbread</td>
          <td>356</td>
          <td>16</td>
        </tr>
      </tbody>
    </Table>
  )
}