import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators/';





@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  URl = 'api.openweathermap.org/data/2.5/weather?q=';
  appid = '&APPID=a4c95c649a6e47e17b1a64dcf04456bc';
  constructor(private Http: HttpClient) { }

  getWeatherInfo(data: String) {
    //console.log(data);
    return this.Http.get(`https://api.openweathermap.org/data/2.5/weather?q=` + data +
      `&APPID=a4c95c649a6e47e17b1a64dcf04456bc&units=metric`).pipe(

        catchError(this.handleError));;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}


