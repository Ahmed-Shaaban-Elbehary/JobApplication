import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForCastComponent } from './components/weather-for-cast/weather-for-cast.component';

const routes: Routes = [
  {
    path:'',
    component: WeatherForCastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
