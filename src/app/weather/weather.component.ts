import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
 city: string = '';
 weatherData: any;

 constructor(private weatherService: WeatherService){}

 getWeather(){
  console.log(`Fetching weather data`);
  
  if (!this.city || this.city.trim() === '') return;


  this.weatherService.getWeather(this.city).subscribe(
    (data) => {
      this.weatherData = data;
      console.log(`weatherdata = ${this.weatherData.location}`)
    },
    (error) => {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data. Please try again.');
    }
  ) 
}
}
