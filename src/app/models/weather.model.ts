export interface WeatherData {
  location: Location;
  timelines: Timelines;
}

export interface Location {
  lat: number;
  lon: number;
  name: string;
  type: string;
}

export interface Timelines {
  daily: Daily[];
  minutely: Minutely[];
}

export interface Daily {
  time: string;
  values: DailyValues;
}

export interface DailyValues {
  temperatureMin: number;
  temperatureMax: number;
}

export interface Minutely {
  time: string;
  values: MinutelyValues;
}

export interface MinutelyValues {
  humidity: number;
  temperature: number;
  windSpeed: number;
}
