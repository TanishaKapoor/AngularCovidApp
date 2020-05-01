import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminCanRedirectGuard } from './login/admin-can-redirect.guard';
import { dashboardRoutes } from './dashboard/dashborad-routing.module';
import { PrecautionsComponent } from './precautions/precautions.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';


const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent, children: [...dashboardRoutes]},
  {path: 'news-details', component: NewsDetailsComponent, canActivate: [AdminCanRedirectGuard]},
  {path: 'login', component: LoginComponent},
  {path:'precautions',component:PrecautionsComponent},
  {path:'latest-news',component:LatestnewsComponent},
  {path:'**',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
