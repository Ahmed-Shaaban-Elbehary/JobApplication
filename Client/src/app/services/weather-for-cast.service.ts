import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherForCast } from '../Models/weather-for-cast';
import { environment as env} from './../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class WeatherForCastService {

  constructor(private httpClient: HttpClient) { }

  getWeatherList(): Observable<Array<WeatherForCast>> {
    return this.httpClient.get<Array<WeatherForCast>>(`${env.BASE_URL}/WeatherForecast`);
  }
}
