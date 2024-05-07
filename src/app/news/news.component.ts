import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
  newsItems: any[] = [];

  constructor(private newsService: NewsService) {}

    ngOnInit(): void {
      this.newsService.getNews().subscribe(data => {
        this.newsItems = data;
      });
  }
}
