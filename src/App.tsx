import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AirportDocument } from './modules/airport/service';
import { createAirportService } from './modules/airport/factory';
import Background from './modules/background/component';
import { getCodeByCountryLabel } from './modules/country-autocomplete/countries';
import Home from './pages/home';
import Comparison from './pages/comparison';

const DEFAULT_COUNTRY = 'us';

function App() {
  const [airports, setAirports] = useState<AirportDocument[]>([]);
  const [isLoadingAirports, setIsLoadingAirports] = useState(false);
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const navigate = useNavigate();

  const airportsService = createAirportService();

  const handleCountryAutocomplete = (countryLabel: string) => {
    setCountry(getCodeByCountryLabel(countryLabel) || DEFAULT_COUNTRY);
  };

  const handleFetchAirports = async () => {
    setIsLoadingAirports(true);
    const _airports = await airportsService.getAirportsByCountry(country);
    setAirports(_airports);
    setIsLoadingAirports(false);
    navigate('/comparison');
  };
  ('');
  return (
    <Background>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleCountryAutocomplete={handleCountryAutocomplete}
              handleFetchAirports={handleFetchAirports}
              isLoadingAirports={isLoadingAirports}
            />
          }
        />

        <Route
          path="/comparison"
          element={<Comparison airports={airports} />}
        />
      </Routes>
    </Background>
  );
}

export default App;
