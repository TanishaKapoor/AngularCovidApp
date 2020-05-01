import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { IUser } from '../core/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;

constructor(private fb: FormBuilder, private route: Router, 
  private loginService: LoginService, private toastrService:ToastrService) {

  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
 }

getErrorMessage() {
  return this.loginForm.get('username').hasError('required') ? 'You must enter a value' :
      this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
          '';
}

 ngOnInit() {

 }

login(myform :IUser) {
  if (this.loginService.validateUser(myform)) {
    localStorage.setItem('TOKEN', 'token');
    localStorage.setItem('username', myform.username);
    this.route.navigate(['/news-details']);
  } else {
    this.loginForm.reset();
    this.toastrService.warning('Please enter valid credentials!', 'Login Portal');
  }

}

resetForm() {
  this.loginForm.reset();
}


}
