import Autocomplete from '@mui/joy/Autocomplete';
import { Typography, AutocompleteOption, ListItemDecorator, ListItemContent, IconButton } from '@mui/joy';
import { SearchPageOptions } from '../utils/searchPageOptions';

export default function PageSelect() {
  return (
    <Autocomplete
      size='sm'
      placeholder="Select page"
      sx={{ width: 250 }}
      options={SearchPageOptions}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <AutocompleteOption {...props}>
          <ListItemDecorator>
            <IconButton size='sm' sx={{ paddingRight: 1 }}>
              {option.icon}
            </IconButton>
          </ListItemDecorator>
          <ListItemContent sx={{ fontSize: 'sm' }}>
            {option.label}
            <Typography level="body-xs">
              {option.desc}
            </Typography>
          </ListItemContent>
        </AutocompleteOption>
      )}
      onC
    />
  )
}