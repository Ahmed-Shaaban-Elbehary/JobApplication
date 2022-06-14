import { WeatherForCastService } from './../../services/weather-for-cast.service';
import { WeatherForCast } from './../../Models/weather-for-cast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-for-cast',
  templateUrl: './weather-for-cast.component.html',
  styleUrls: ['./weather-for-cast.component.scss']
})
export class WeatherForCastComponent implements OnInit, OnDestroy {

  public weatherForCasts: Array<WeatherForCast>;
  private routServ: Subscription;

  constructor(private _service: WeatherForCastService) { }

  ngOnInit(): void {
    this.routServ = this._service
    .getWeatherList()
    .subscribe((resp: Array<WeatherForCast>) => {
        this.weatherForCasts = resp
        console.log(resp);
      })
  }
  ngOnDestroy(): void {
      if(this.routServ){
        this.routServ.unsubscribe;
      }
  }

}
