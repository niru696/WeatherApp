import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  show = [];
  showGrid = [];
  showLebel = [];
  weatherData = [];
  img = "https://tribwgntv.files.wordpress.com/2019/04/rosehoran.png?w=770";
  haze = "https://i.cbc.ca/1.4780582.1533911330!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/hazy-skyline.jpg"
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private weatherService: WeatherService, private fb: FormBuilder) {
    this.createForm2();

  }

  WeatherInfo2: [];
  angForm2: FormGroup;


  createForm2() {
    this.angForm2 = this.fb.group({
      city: ['', Validators.required]

    });
  }


  ngOnInit() {

    for (let j = 0; j < 9; j++) {
      this.show[j] = false;
      console.log(this.show[j])
      this.showGrid[j] = false;
      this.showLebel[j] = false;
    }
  }
  valid = [];
  err = [];
  getInfo(i) {
    this.err[i] = '';
    this.show[i] = true;

    this.weatherService.getWeatherInfo(this.angForm2.value.city).subscribe((data: any) => {
      // this.WeatherInfo2 = data;
      this.weatherData[i] = data;
      if (this.weatherData[i].weather[0].main == "Clear") {

      }


      this.valid[i] = data;
    },
      error => this.err[i] = error);
    this.showLebel[i] = false;
  }
  editInfo(i) {
    this.showLebel[i] = true;
    this.show[i] = false;

  }

  showGrids(i) {
    console.log(i);
    this.showGrid[i] = true;
    if (this.show[i]) {
      this.showLebel[i] = false;

    }
    else {
      this.showLebel[i] = true;

    }
    console.log("Called")
  }

  getDetailInfo2() {
    console.log(this.angForm2.value);
    this.weatherService.getWeatherInfo(this.angForm2.value.city).subscribe((data: any) => {
      this.WeatherInfo2 = data;
      console.log(this.WeatherInfo2);
    });
  }

}

