import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news.model';
import { NewsPage } from './news-page.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  readonly serverUrl = "http://localhost:49831/"

  getNews(){
      return this.http.get<News[]>(this.serverUrl + "api/news");
  }

  getNewsPage(page:number){
     return this.http.get<NewsPage>(this.serverUrl + "api/news/" + page);
  }
}
