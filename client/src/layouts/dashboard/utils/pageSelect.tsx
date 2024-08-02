import Autocomplete from '@mui/joy/Autocomplete';
import { Typography, AutocompleteOption, ListItemDecorator, ListItemContent, IconButton } from '@mui/joy';
import { SearchPageOptions } from './searchPageOptions';
import { useNavigate } from 'react-router-dom';

export default function PageSelect() {
  const navigate = useNavigate();

  return (
    <Autocomplete
      size='sm'
      placeholder="Search.."
      sx={{ width: { xs: 150, sm: 200, md: 250 } }}
      options={SearchPageOptions}
      autoHighlight
      startDecorator={
        <IconButton
          variant="outlined"
          color="neutral"
          sx={{ bgcolor: 'background.level1' }}
        >
          <Typography level="title-sm" textColor="text.icon">
            ⌘ K
          </Typography>
        </IconButton>
      }
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