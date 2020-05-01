import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

const testComponent = class { };
const routerTestingParam = [
  { path: 'dashboard/state', component: testComponent }
];

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router:Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes(routerTestingParam)],
      declarations: [ DashboardComponent ],
      providers:[    {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy('navigate'); }
    }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should router to state component',(() => {
    component.ngOnInit();
    expect(router.navigate).toHaveBeenCalled();
  }));
});
