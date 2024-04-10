import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CoursesTable() {
  return (
    <Sheet variant="outlined">
      <Table variant="soft" borderAxis="bothBetween">
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Course name</th>
            <th>Active enrolled users</th>
            <th>AVG Review</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Totals</th>
            <td>Maximum numbers</td>
            <td>AVG review of courses</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
    </Sheet>
  );
}
