import { Injectable, EventEmitter, OnChanges } from '@angular/core';
import { IUser } from '../core/models';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  private loginData: IUser[];
  isUserLoggedIn = new Subject<boolean>();
  userWantsToLogOut = new Subject<boolean>();
  loggeInUserName: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router:Router) {
    this.getUsers();
    this.userWantsToLogOut.subscribe((value)=>{
      if (value && localStorage.getItem('TOKEN')) {
        localStorage.clear();
        this.router.navigate(['/dashboard/state']);
      }else{
        this.router.navigate(['/login']);
      }
      this.isUserLoggedIn.next(false);
      this.loggeInUserName.emit('');
    })

  }

  /** Method to get all login user data. */
  getUsers(): IUser[] {
    this.loginData = [{
      "id": 1,
      "username": "Admin",
      "password": "Admin"
    }, {
      "id": 2,
      "username": "Admin2",
      "password": "Admin2"
    }];
    return this.loginData;
  }


  /** Method that validates login credentials passed by user. */
  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase() 
    && user.password.toLowerCase()===usr.password.toLowerCase()) > -1) {
      validUser = true;
      this.loggeInUserName.emit(user.username);
      this.isUserLoggedIn.next(true);
    }
    return validUser;
  }

  initialCredentials(){
    if(window.performance.navigation.type==1){
      if(localStorage.getItem('TOKEN')){
        this.isUserLoggedIn.next(true);
        this.loggeInUserName.emit(localStorage.getItem('username'));
      }
    }
  }
}
