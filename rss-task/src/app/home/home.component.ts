import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model';
import { NewsPage } from '../shared/news-page.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    newsList: News[];
    newsPage: NewsPage;
    currentPage: number;
    collectionSize: number;
    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.newsService.getNewsPage(1).subscribe(data => {
            this.newsPage = data;
            this.collectionSize = data.CollectionSize;
        })
        this.currentPage = 1;
    }

    getNewsPage() {
        this.newsService.getNewsPage(this.currentPage).subscribe(data => {
            this.newsPage = data;
            this.collectionSize = data.CollectionSize;
        })
    }

    convertDate(date: string){
    }

}
