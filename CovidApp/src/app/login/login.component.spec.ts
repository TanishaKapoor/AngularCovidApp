import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

const loginServiceStub={
  validateUser:jasmine.createSpy('validateUser').and.returnValue(true)
};
const testComponent = class { };
const routerTestingParam = [
  { path: 'latest-news', component: testComponent }
];
const toastrServiceStub={
  success: jasmine.createSpy('success'),
  warning:jasmine.createSpy('warning')
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router :Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes(routerTestingParam)],
      declarations: [ LoginComponent ],
      providers:[
        FormBuilder,        
        HttpClient,
        {provide: ToastrService, useValue:toastrServiceStub},
        {provide:LoginService, useValue:loginServiceStub}
      ],
      schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router=TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should redirect to new details after successful login',()=>{
    const spy = spyOn(router, 'navigate');
    component.login({id:1,username:"",password:""});
    const url = spy.calls.first().args[0];
    expect(url[0]).toBe('/news-details');
  });
});
