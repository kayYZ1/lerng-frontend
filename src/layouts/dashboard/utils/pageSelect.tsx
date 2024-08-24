import { useNavigate } from 'react-router-dom';

import Autocomplete from '@mui/joy/Autocomplete';
import Typography from '@mui/joy/Typography';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import IconButton from '@mui/joy/IconButton';

import { SearchPageOptions } from './searchPageOptions';

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
      renderOption={(props, option) => {
        const { key, ...rest }: any = props; //Temporary solution - key has no exported type (mui/joy thingy)
        return (
          <AutocompleteOption key={key} {...rest}>
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
        )
      }}
      onChange={(_, value) => {
        if (value) {
          navigate(`${value.link}`)
        }
      }}
    />
  )
}