import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictdetailsComponent } from './districtdetails.component';
import { DashboardService } from '../dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';


const dashboardServiceStub={};
const testComponent = class { };

const routerTestingParam = [
  { path: 'dashboard/state', component: testComponent }
];

describe('DistrictdetailsComponent', () => {
  let component: DistrictdetailsComponent;
  let fixture: ComponentFixture<DistrictdetailsComponent>;
  let router:Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes(routerTestingParam)],
      declarations: [ DistrictdetailsComponent ],
      providers:[{
        provide:DashboardService, useValue: dashboardServiceStub
      },
      { provide: ActivatedRoute, useValue: {snapshot: { params: of({ stateCode: 'AL' })} } }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictdetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should go back successfully to dashboard page',()=>{
    const spy = spyOn(router, 'navigate');
    component.goBack();
    const url = spy.calls.first().args[0];
    expect(url[0]).toBe('/dashboard/state');
  });
});
