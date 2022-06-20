import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  constructor(private _http: HttpClient) { }
  
  sportsNews='https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=93db02f9184b418b957e511a5733c46a';

  scienceNews='https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=93db02f9184b418b957e511a5733c46a'

  sportsHeadlines(): Observable<any> {
    return this._http.get(this.sportsNews);
  }

  scienceHeadlines(): Observable<any> {
    return this._http.get(this.scienceNews);
  }
}
