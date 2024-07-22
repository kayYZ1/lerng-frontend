import Autocomplete from '@mui/joy/Autocomplete';
import { Typography, AutocompleteOption, ListItemDecorator, ListItemContent, IconButton } from '@mui/joy';
import { SearchPageOptions } from '../utils/searchPageOptions';
import { useNavigate } from 'react-router-dom';

export default function PageSelect() {
  const navigate = useNavigate();

  return (
    <Autocomplete
      size='sm'
      placeholder="Select page"
      sx={{ xs: { width: 100 }, md: { width: 250 } }}
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
      onChange={(e, value) => {
        if (value) {
          navigate(`${value.link}`)
        }
      }}
    />
  )
}