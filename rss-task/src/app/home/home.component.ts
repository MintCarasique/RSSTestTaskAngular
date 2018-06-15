import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    newsList: News[];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {this.newsList = data})
  }

}
