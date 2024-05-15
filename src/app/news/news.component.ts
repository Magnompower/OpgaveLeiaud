import {Component, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import {NewsService } from './news.service';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  providers: [NewsService],
  // schemas: NO_ERRORS_SCHEMA,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsItems: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (news: any[]) => {
        this.newsItems = news;
      },
      error: (err: any) => console.error('Failed to load news', err)
    });
  }
}
