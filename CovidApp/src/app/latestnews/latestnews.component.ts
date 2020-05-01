import { Component, OnInit } from '@angular/core';
import { INews } from '../core/models';
import { newsDetailsDb } from '../core/newdetailsDb';
import { DashboardService } from '../dashboard/dashboard.service';
import { LatestNewsService } from './latestnews.service';

@Component({
  selector: 'app-latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.scss']
})
export class LatestnewsComponent implements OnInit {

  latestnews:INews[];
  constructor(private latestnewService:LatestNewsService) { }

  ngOnInit(): void {
    this.latestnewService.getNewsDetails().subscribe((news)=>{
      this.latestnews=news;
    });
  }


}
