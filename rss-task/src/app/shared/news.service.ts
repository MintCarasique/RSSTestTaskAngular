import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  readonly serverUrl = "http://localhost:49831/"

  getNews(){
      return this.http.get<News[]>(this.serverUrl + "api/news");
  }
}
