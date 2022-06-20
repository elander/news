import { Component, OnDestroy, OnInit } from '@angular/core';

import { NewsapiService } from '../newsapi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit, OnDestroy {
  constructor(private api: NewsapiService) { }
  subscription = new Subscription;
  topSportsData: any[] = [];
  
  ngOnInit(): void {
    this.subscription = this.api.sportsHeadlines().subscribe(result => {
      console.log(result);
      this.topSportsData = result.articles;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
