import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


const testComponent = class { };
const routerTestingParam = [
  { path: 'dashboard/state', component: testComponent }
];


describe('LoginService', () => {
  let service: LoginService;
  let router:Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes(routerTestingParam)],
      providers:[]
    });
    service = TestBed.inject(LoginService);
    router = TestBed.get(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should succesfully validate login data',()=>{
      service.getUsers();
      service.validateUser({
        "id": 1,
        "username": "Admin",
        "password": "Admin"
      });
      service.loggeInUserName.subscribe(value=>{
        expect(value).toEqual('Admin');
      })
      expect(service.isUserLoggedIn).not.toBeNull();
  });
  it('should not validate if credentials are invalid',()=>{
      service.getUsers();
      service.validateUser({
        "id": 1,
        "username": "random",
        "password": "random"
      });
      service.isUserLoggedIn.subscribe(value=>{
        expect(value).toEqual(false);
      });
      expect(service.loggeInUserName).not.toBeNull();
  });
});
