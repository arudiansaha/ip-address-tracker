export default interface Geolocation {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    timezone: string;
    postalCode: string;
    geonameId: number;
  };
  isp: string;
}
