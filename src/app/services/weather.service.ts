import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      'https://api.tomorrow.io/v4/weather/forecast',
      {
        params: new HttpParams()
          .set('location', cityName)
          .set('apikey', 'eNSDl7SSl7oWn0BRmE7hVugz969WKn9W'),
      }
    );
  }
}
