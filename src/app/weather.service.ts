import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  appKey = '2c27f6d957e74c80b3862141250302'
  appUrl = 'http://api.weatherapi.com/v1'

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any>{
    const url =  `${this.appUrl}/current.json?key=${this.appKey}&q=${city}`;
    console.log(url)
    return this.http.get(url)
  }
}
