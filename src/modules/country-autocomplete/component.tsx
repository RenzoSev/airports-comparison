import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from './countries';

export interface CountrySelectProps {
  handleCountryAutocomplete: (countryLabel: string) => void;
}

export default function CountrySelect({
  handleCountryAutocomplete,
}: CountrySelectProps) {
  return (
    <Autocomplete
      id="country-select"
      sx={{
        width: 300,
        color: '#e2e8f0',
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: '#e2e8f0',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#e2e8f0',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#e2e8f0',
        },
        '.MuiSvgIcon-root ': {
          fill: '#e2e8f0 !important',
        },
        '.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
          color: '#e2e8f0',
        },
        '.css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
          color: '#e2e8f0',
        },
        '#country-select': {
          color: '#e2e8f0',
        },
        '#country-select-label': {
          color: '#e2e8f0 !important',
        },
        '#country-select-label::placeholder': {
          color: '#e2e8f0 !important',
        },
      }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onInputChange={(_, value) => {
        handleCountryAutocomplete(value);
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
