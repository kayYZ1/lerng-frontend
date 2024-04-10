import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Box, Chip } from '@mui/joy';

export default function SelectFilter() {
  return (
    <Select
      size='sm'
      placeholder="Sort by..."
      multiple
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', gap: '0.25rem' }}>
          {selected.map((selectedOption) => (
            <Chip variant="soft" color="primary">
              {selectedOption.label}
            </Chip>
          ))}
        </Box>
      )}
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
      <Option value="revBest">Reviews ascending</Option>
      <Option value="revWorst">Reviews descending</Option>
    </Select>
  )
}