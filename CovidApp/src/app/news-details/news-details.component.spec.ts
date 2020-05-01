import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsComponent } from './news-details.component';
import { LatestNewsService } from '../latestnews/latestnews.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { INews } from '../core/models';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const latestNewsServiceStub={
  addnews:jasmine.createSpy('addnews').and.returnValue(of({}))
};
const testComponent = class { };
const routerTestingParam = [
  { path: 'latest-news', component: testComponent }
];

const mockData:INews={
  id:0,
  news_title:'',
  news_description:'',
  news_summary:'',
  full_news:'',
  news_area:''
};
describe('NewsDetailsComponent', () => {
  let component: NewsDetailsComponent;
  let fixture: ComponentFixture<NewsDetailsComponent>;
  let router:Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes(routerTestingParam)],
      declarations: [ NewsDetailsComponent ],
      providers:[FormBuilder,
        {
          provide: LatestNewsService, useValue:latestNewsServiceStub
        }
      ],
      schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsComponent);
    component = fixture.componentInstance;
    router= TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to latest news after saving',()=>{
    const spy = spyOn(router, 'navigate');
    component.save(FormGroup.prototype);
    const url = spy.calls.first().args[0];
    expect(url[0]).toBe('/latest-news');
  });
});
