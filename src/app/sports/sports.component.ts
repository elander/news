import { Component, OnInit } from '@angular/core';

import { NewsapiService } from '../newsapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  constructor(private api: NewsapiService) { }
  topSportsData: Observable<any> = {} as Observable<any>;
  
  ngOnInit(): void {
    this.topSportsData = this.api
    .sportsHeadlines();
  }

  
}
