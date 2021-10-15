import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class F1ServiceService {
  //getting the url from the environment
  url:string =environment.url;

  constructor(private http:HttpClient) { }

  //getting the data from  the api using post 
  getRaceResults(season:number,position:number){
    return this.http.get(`${this.url}${season}/results/${position}/drivers.json`,{ responseType: 'json' });
  }
}
