import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CovidApp';
  toggleTitleValue:string='LOGIN';
  username:string='';
  disabled=false;

  constructor(private loginService:LoginService, private router: Router,private activatedRoute: ActivatedRoute,){
    this.loginService.isUserLoggedIn.subscribe((value)=>{
       value?this.toggleTitleValue='LOGOUT':this.toggleTitleValue='LOGIN';
   })
   this.loginService.loggeInUserName.subscribe(value=>{
   this.username = value;
   });
   if(window.performance.navigation.type==1){
      this.loginService.initialCredentials();
  }
  }
  ngOnInit(){
    
  }
  get toggleTitle(){
    if(this.router.url=='/dashboard/state'){
      this.disabled=true;
    }
    else if(this.router.url=='/dashboard'){
      this.router.navigateByUrl('/dashboard/state');
    }
    else{
      this.disabled=false;
    }
    return this.toggleTitleValue;
  }
  redirect(){
    this.loginService.userWantsToLogOut.next(true);
  }
}
