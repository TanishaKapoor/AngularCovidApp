import { TestBed, inject } from '@angular/core/testing';

import { LatestNewsService } from './latestnews.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

const mockData=[
  {
      id:1,
      news_title:'',
      news_description:'',
      news_summary:'',
      full_news:'',
      news_area:''
  
  }
];
const httpClientStub={
  get: jasmine.createSpy('get').and.returnValue(of(mockData)),
  post:jasmine.createSpy('post').and.returnValue(of(mockData))
};
describe('LatestNewsService', () => {
  let service: LatestNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[LatestNewsService,
        {provide:HttpClient,useValue:httpClientStub},
        HttpHandler]
    });
    service = TestBed.inject(LatestNewsService);
  });

  it('should be created', inject([LatestNewsService],(service:LatestNewsService)=>{
    expect(service).toBeTruthy();
  }));
  it('should successully get news details',()=>{
    service.getNewsDetails().subscribe((value)=>{
      expect(value).toEqual(mockData);
    });
  });
  it('it should succesfully add news details',()=>{
      service.addnews(mockData[0]).subscribe((value)=>{
        expect(value).toBeTruthy();
      });
  });
});

