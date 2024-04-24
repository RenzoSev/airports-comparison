import { useEffect, useState } from 'react';
import { AirportDocument } from './modules/airport/service';
import { createAirportService } from './modules/airport/factory';

function App() {
  const [airports, setAirports] = useState<AirportDocument[]>([]);
  const airportsService = createAirportService();
  const DEFAULT_COUNTRY = 'us';

  useEffect(() => {
    const fetchAirports = async () => {
      const _airports = await airportsService.getAirportsByCountry(
        DEFAULT_COUNTRY
      );
      setAirports(_airports);
    };

    fetchAirports();
  }, []);

  console.log({ airports });

  return (
    <>
      <div>Hello World</div>
    </>
  );
}

export default App;
