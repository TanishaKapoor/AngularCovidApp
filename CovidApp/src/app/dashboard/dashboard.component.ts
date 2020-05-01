import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { IStateDetails } from '../core/models';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router ) {
  };

  ngOnInit(): void {
    this.router.navigate(['/dashboard/state']);
  }
}
