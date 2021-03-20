import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news = []

  constructor(public newsService: NewsService ) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews()
  }

}
