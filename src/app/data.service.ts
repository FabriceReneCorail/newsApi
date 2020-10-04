import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=4de21d638a5a47deb059d0bcf9f2f362';

  constructor( private http : HttpClient) {}

  getNews(){
    return this.http.get<News>(this.apiUrl)
    };

    //var req = new Request(this.apiUrl);
    //fetch(req)
   //  .then(function (response) {
      // console.log(response.json());
     // })
  }

