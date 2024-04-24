import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AirportDocument } from '../airport/service';

export interface AutoCompleteProps {
  airports: AirportDocument[];
  handleAirport: (airportLabel: string) => void;
  label: string;
}

function AirportsAutoComplete({
  airports,
  label,
  handleAirport,
}: AutoCompleteProps) {
  return (
    <Autocomplete
      onInputChange={(_event, value) => handleAirport(value)}
      options={[...airports].sort(
        (a, b) => -b.name[0].localeCompare(a.name[0])
      )}
      groupBy={(option) => option.name[0]}
      disablePortal
      id={`airports-select`}
      getOptionLabel={(option) =>
        `${option.name} - ${option.icao} - ${option.iata}`
      }
      renderInput={(params) => <TextField {...params} label={label} />}
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
        '#airports-select': {
          color: '#e2e8f0',
        },
        '#airports-select-label': {
          color: '#e2e8f0',
        },
        '#airports-select-label::placeholder': {
          color: '#e2e8f0',
        },
      }}
    />
  );
}

export default AirportsAutoComplete;
