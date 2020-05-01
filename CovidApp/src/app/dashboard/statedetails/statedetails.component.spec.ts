import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatedetailsComponent } from './statedetails.component';
import { DashboardService } from '../dashboard.service';
import { of } from 'rxjs';

const mockData={
  "active": "304",
  "confirmed": "474",
  "deaths": "18",
  "deltaconfirmed": "0",
  "deltadeaths": "0",
  "deltarecovered": "0",
  "lastupdatedtime": "24/04/2020 17:57:37",
  "recovered": "152",
  "state": "Karnataka",
  "statecode": "KA",
  "statenotes": ""
};

const dashboardServiceStub={
  getStateDetails: jasmine.createSpy('getStateDetails').and.returnValue(of([mockData]))
}
describe('StatedetailsComponent', () => {
  let component: StatedetailsComponent;
  let fixture: ComponentFixture<StatedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatedetailsComponent ],
      providers:[{
        provide:DashboardService, useValue:dashboardServiceStub
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return state value',()=>{
    component.ngOnInit();
    expect(component.stateValues).toEqual([mockData]);
  });
});
