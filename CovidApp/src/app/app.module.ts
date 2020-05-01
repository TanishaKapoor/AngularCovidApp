import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from './core/core.module';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { DistrictdetailsComponent } from './dashboard/districtdetails/districtdetails.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { StatedetailsComponent } from './dashboard/statedetails/statedetails.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewsDetailsComponent,
    DistrictdetailsComponent,
    PrecautionsComponent,
    LatestnewsComponent,
    StatedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    LoginModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
