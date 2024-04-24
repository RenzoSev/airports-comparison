import { AxiosInstance } from 'axios';

export interface AirportAPIParams {
  country?: string;
}

export interface AirportDocument {
  icao: string;
  iata: string;
  name: string;
  city: string;
  region: string;
  country: string;
  elevation_ft: string;
  latitude: string;
  longitude: string;
  timezone: string;
}

export interface IAirportService {
  getAirportsByCountry: (country: string) => Promise<AirportDocument[]>;
}

export class AirportService implements IAirportService {
  constructor(private request: AxiosInstance) {}

  protected buildURL({ country }: AirportAPIParams) {
    const baseURL = new URL(import.meta.env.VITE_AIRPORTS_API_URL);
    if (country) baseURL.searchParams.set('country', country);
    return baseURL.toString();
  }

  async getAirportsByCountry(country: string): Promise<AirportDocument[]> {
    const url = this.buildURL({ country });
    const { data: airports } = await this.request.get<AirportDocument[]>(url, {
      headers: {
        'X-Api-Key': import.meta.env.VITE_AIRPORTS_API_KEY,
      },
    });
    return airports;
  }
}
