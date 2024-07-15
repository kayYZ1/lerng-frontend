import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import { useSearchParams } from 'react-router-dom';

export default function SelectFilter() {
  return (
    <Select
      size='sm'
      placeholder="Sort by..."
      sx={{
        minWidth: '15rem',
      }}
      slotProps={{
        listbox: {
          sx: {
            width: '100%',
          },
        },
      }}
    >
      <Option value="dateAsc">Date ascending</Option>
      <Option value="dateDesc">Date descending</Option>
    </Select>
  )
}