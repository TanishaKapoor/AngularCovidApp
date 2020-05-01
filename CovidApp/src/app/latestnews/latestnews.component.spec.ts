import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestnewsComponent } from './latestnews.component';
import { LatestNewsService } from './latestnews.service';
import { of } from 'rxjs';
import { INews } from '../core/models';

const mockdata:INews={
  id:1,
  news_title:'ABC',
  news_description:'Description',
  news_summary:'Summary',
  full_news:'fullnews',
  news_area:''

};
const latestServiceStub={
  getNewsDetails:jasmine.createSpy('getNewsDetails').and.returnValue(of([mockdata]))
};
describe('LatestnewsComponent', () => {
  let component: LatestnewsComponent;
  let fixture: ComponentFixture<LatestnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestnewsComponent ],
      providers:[{
        provide:LatestNewsService, useValue:latestServiceStub
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should initialsie latest news',()=>{
    component.ngOnInit();
    expect(component.latestnews).toEqual([mockdata]); 
  });
});
