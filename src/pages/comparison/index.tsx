import { Button } from '@mui/material';
import { AirportDocument } from '../../modules/airport/service';
import AirportsAutoComplete from '../../modules/airports-autocomplete/component';
import { useState } from 'react';
import GoogleMaps from '../../modules/google-maps/component';
import {
  converterCoordinatesDistanceToMeters,
  converterMeterToNauticalMiles,
} from '../../modules/coordinates/converter';

export interface ComparisonProps {
  airports: AirportDocument[];
}

function Comparison({ airports }: ComparisonProps) {
  const [airport1, setAirport1] = useState<AirportDocument>();
  const [airport2, setAirport2] = useState<AirportDocument>();
  const [showCoordinates, setShowCoordinates] = useState(false);

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

      <div className="w-full flex flex-col justify-center items-center gap-1">
        {airport1 && airport2 && showCoordinates && (
          <GoogleMaps
            airport1={{
              lat: Number(airport1.latitude),
              lon: Number(airport1.longitude),
            }}
            airport2={{
              lat: Number(airport2.latitude),
              lon: Number(airport2.longitude),
            }}
          />
        )}

        {airport1 && airport2 && showCoordinates && (
          <p className="text-slate-200 font-bold italic">
            {converterMeterToNauticalMiles(
              converterCoordinatesDistanceToMeters(
                {
                  lat: Number(airport1.latitude),
                  lon: Number(airport1.longitude),
                },
                {
                  lat: Number(airport2.latitude),
                  lon: Number(airport2.longitude),
                }
              )
            ).toFixed(2)}{' '}
            NM
          </p>
        )}
      </div>

      <Button
        variant="contained"
        className="w-44 md:w-80 h-12 md:h-16"
        onClick={() => setShowCoordinates(true)}
      >
        COMPARE
      </Button>
    </section>
  );
}

export default Comparison;
