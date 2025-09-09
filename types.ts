export interface Session {
  name: string;
  videoUrl: string;
}

export interface GrandPrix {
  id: string;
  name: string;
  country: string;
  circuit: string;
  dates: string;
  countryCode: string;
  sessions: Session[];
  mapId?: string;
}