import { Component, OnInit } from '@angular/core';
import { IPrecaution } from '../core/models';
import { precuationsDB } from '../core/precautionsDb';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.scss']
})
export class PrecautionsComponent implements OnInit {

  precautions:IPrecaution[];
  constructor() { }

  ngOnInit(): void {
    this.precautions= precuationsDB;
  }

}
