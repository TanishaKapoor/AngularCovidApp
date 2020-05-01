import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { INews } from '../core/models';
import { LatestNewsService } from '../latestnews/latestnews.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  newsForm: FormGroup;
  news_title: FormControl;

  constructor(public fb : FormBuilder, private latestnewsService:LatestNewsService,private router:Router,) { }

  ngOnInit(): void {
    this.newsForm = this.fb.group({
       news_title:["", [Validators.required,Validators.maxLength(30)]],
       news_description: ["", [Validators.required,Validators.maxLength(50)]],
       news_summary: ["", [Validators.required,Validators.maxLength(70)]], 
       full_news: ["", [Validators.required,Validators.maxLength(100)]], 
       news_area:["",[Validators.required,Validators.maxLength(20)]],
    });
  }

  save(form:FormGroup){
    
    const news:INews={
      id:0,
      news_title:form.controls?.news_title.value,
      news_description:form.controls?.news_description.value,
      news_summary:form.controls?.news_summary.value,
      full_news:form.controls?.full_news.value,
      news_area:form.controls?.news_area.value,
    };
    this.latestnewsService.addnews(news).subscribe(value=>
      this.router.navigate(['/latest-news']));

  }

  getErrorMessage() {
    return this.newsForm.get('news_title').hasError('required') ? 'You must enter a value' :
        this.newsForm.get('news_description').hasError('required') ? 'You must enter a value' :
        this.newsForm.get('news_summary').hasError('required') ? 'You must enter a value' :
        this.newsForm.get('full_news').hasError('required') ? 'You must enter a value' :
        this.newsForm.get('news_area').hasError('required') ? 'You must enter a value' :
            '';
  }
  
  resetForm() {
    this.newsForm.reset();
  }
  
}
