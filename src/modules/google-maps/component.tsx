import { Coordinates } from '../coordinates/converter';

interface GoogleMapsProps {
  airport1: Coordinates;
  airport2: Coordinates;
}

function GoogleMaps({ airport1, airport2 }: GoogleMapsProps) {
  return (
    <iframe
      className="w-80 md:w-1/2 md:h-96"
      width="450"
      height="250"
      frameBorder="0"
      style={{ border: 0 }}
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/directions?key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }&origin=${airport1.lat},${airport1.lon}&destination=${airport2.lat},${
        airport2.lon
      }&mode=flying`}
      allowFullScreen
    ></iframe>
  );
}

export default GoogleMaps;
