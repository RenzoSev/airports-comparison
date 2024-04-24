import { useEffect, useState } from 'react';
import { AirportDocument } from './modules/airport/service';
import { createAirportService } from './modules/airport/factory';
import Background from './modules/background/component';
import CountrySelect from './modules/country-autocomplete/component';
import Button from '@mui/material/Button';
import { getCodeByCountryLabel } from './modules/country-autocomplete/countries';

const DEFAULT_COUNTRY = 'us';

function App() {
  const [airports, setAirports] = useState<AirportDocument[]>([]);
  const [country, setCountry] = useState(DEFAULT_COUNTRY);

  const airportsService = createAirportService();

  const handleCountryAutocomplete = (countryLabel: string) => {
    setCountry(getCodeByCountryLabel(countryLabel) || DEFAULT_COUNTRY);
  };

  useEffect(() => {
    const fetchAirports = async () => {
      const _airports = await airportsService.getAirportsByCountry(
        DEFAULT_COUNTRY
      );
      setAirports(_airports);
    };

    fetchAirports();
  }, []);

  return (
    <Background>
      <section className="w-full text-center h-full flex flex-col justify-center items-center py-12 px-8">
        <div className="flex flex-col gap-8 md:gap-14 w-full h-full justify-center items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-slate-100 font-sans text-center text-3xl font-medium sm:text-6xl">
              Compare Airports <span className="text-slate-300">Distance</span>
            </h1>

            <p className="text-slate-100 font-light opacity-60 md:text-2xl">
              Calculate the distance{' '}
              <span className="text-slate-300">between airports</span>.
            </p>
          </div>

          <div>
            <CountrySelect
              handleCountryAutocomplete={handleCountryAutocomplete}
            />
          </div>
        </div>

        <Button variant="contained">LET'S COMPARE!</Button>
      </section>
    </Background>
  );
}

export default App;
