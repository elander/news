import { Component, OnDestroy, OnInit } from '@angular/core';

import { NewsapiService } from '../newsapi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private api: NewsapiService) { }
  subscription = new Subscription;
  topScienceData: any[] = [];
  
  ngOnInit(): void {
    this.subscription = this.api.scienceHeadlines().subscribe(result => {
      console.log(result);
      this.topScienceData = result.articles;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
