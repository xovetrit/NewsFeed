import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news = []
  headlineSearch: any;

  constructor(public newsService: NewsService ) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews()
  }

  Search(){
    if (this.headlineSearch == '') this.ngOnInit()
    else this.news = this.news.filter(n => n.headline.toLowerCase().match(this.headlineSearch.toLowerCase()))
  }

}
