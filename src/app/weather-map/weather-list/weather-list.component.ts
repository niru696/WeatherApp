import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
  imgurl = [];
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
      this.weatherData[i] = data;
      if (this.weatherData[i].weather[0].main == "Clear") {
        this.imgurl[i] = "https://previews.123rf.com/images/kokoroyuki/kokoroyuki1610/kokoroyuki161000128/65063897-landscape-of-the-clear-sky.jpg";
      }
      else if (this.weatherData[i].weather[0].main == "Haze") {
        this.imgurl[i] = "https://cdn.cnn.com/cnnnext/dam/assets/151028122617-indonesia-haze-1027-01-super-169.jpg"
      }
      else if (this.weatherData[i].weather[0].main == "Rain") {
        this.imgurl[i] = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201808/rain.jpeg?ZJBcTGvJ_hafTpYSLUVAMNIXRBd9spWk";
      }
      else if (this.weatherData[i].weather[0].main == "Clouds") {
        this.imgurl[i] = "http://apollo.lsc.vsc.edu/classes/met130/notes/chapter14/graphics/walcloud2.jpg";
      }
      else if (this.weatherData[i].weather[0].main == "Smoke") {
        this.imgurl[i] = "https://www.mercurynews.com/wp-content/uploads/2018/08/AP18212829564242.jpg?w=620https://www.mercurynews.com/wp-content/uploads/2018/08/AP18212829564242.jpg?w=620";
      }
      else {
        this.imgurl[i] = "https://previews.123rf.com/images/kokoroyuki/kokoroyuki1610/kokoroyuki161000128/65063897-landscape-of-the-clear-sky.jpg";

      }




    },
      error => this.err[i] = error);



    this.showLebel[i] = false;
  }

  editInfo(i) {
    this.showLebel[i] = true;
    this.show[i] = false;
    this.imgurl[i] = '';

  }

  showGrids(i) {
    this.showGrid[i] = true;
    if (this.show[i]) {
      this.showLebel[i] = false;

    }
    else {
      this.showLebel[i] = true;

    }
  }

}

