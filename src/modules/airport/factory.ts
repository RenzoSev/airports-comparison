import axios from 'axios';
import { AirportService } from './service';

export function createAirportService({
  _AirportService = AirportService,
  _Axios = axios,
} = {}) {
  const airportService = new _AirportService(_Axios);
  return airportService;
}
