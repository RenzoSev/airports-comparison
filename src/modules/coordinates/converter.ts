import haversine from 'haversine-distance';

export interface Coordinates {
  lat: number;
  lon: number;
}

export function converterCoordinatesDistanceToMeters(
  airport1: Coordinates,
  airport2: Coordinates
) {
  return haversine(airport1, airport2);
}

export function converterMeterToNauticalMiles(meter: number) {
  return meter / 1852;
}
