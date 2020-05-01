import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StateDetailInMemoryService } from './state-detail-in-memory.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      StateDetailInMemoryService,{ dataEncapsulation: false }
    ),
  ],
  exports:[
    HttpClientModule
  ]
})
export class CoreModule { }
