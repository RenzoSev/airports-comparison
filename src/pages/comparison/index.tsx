import { Button } from '@mui/material';
import { AirportDocument } from '../../modules/airport/service';
import AirportsAutoComplete from '../../modules/airports-autocomplete/component';
import { useState } from 'react';
import GoogleMaps from '../../modules/google-maps/component';

export interface ComparisonProps {
  airports: AirportDocument[];
}

function Comparison({ airports }: ComparisonProps) {
  const [airport1, setAirport1] = useState<AirportDocument>();
  const [airport2, setAirport2] = useState<AirportDocument>();
  const [showGoogleMaps, setShowGoogleMaps] = useState(false);

  const findAirportByName = (airportLabel: string) => {
    const airportName = airportLabel.split('-')[0].trim();
    const airport = airports.find(({ name }) => name === airportName);
    return airport;
  };

  const handleAirport1 = (airportLabel: string) => {
    setAirport1(findAirportByName(airportLabel));
  };

  const handleAirport2 = (airportLabel: string) => {
    setAirport2(findAirportByName(airportLabel));
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-12 md:gap-20">
      <div className="flex flex-col gap-6 md:gap-12">
        <AirportsAutoComplete
          airports={airports}
          label="AIRPORT 1"
          handleAirport={handleAirport1}
        />

        <AirportsAutoComplete
          airports={airports}
          label="AIRPORT 2"
          handleAirport={handleAirport2}
        />
      </div>

      {airport1 && airport2 && showGoogleMaps && (
        <GoogleMaps
          airport1={{ lat: airport1.latitude, long: airport1.longitude }}
          airport2={{ lat: airport2.latitude, long: airport2.longitude }}
        />
      )}

      <Button
        variant="contained"
        className="w-44 md:w-80 h-12 md:h-16"
        onClick={() => setShowGoogleMaps(true)}
      >
        COMPARE
      </Button>
    </section>
  );
}

export default Comparison;
