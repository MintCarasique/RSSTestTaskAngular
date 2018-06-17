import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news.model';
import { Comment } from '../shared/comment.model'
import { NewsPage } from '../shared/news-page.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/user.service';
import { CommentService } from '../shared/comment.service';
import { Router } from '@angular/router';

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
    constructor(
        private newsService: NewsService, 
        private modalService: NgbModal, 
        private userService: UserService,
        private router: Router,
        private commentService: CommentService
    ) { }

    ngOnInit() {
        this.newsService.getNewsPage(1).subscribe(data => {
            this.newsPage = data;
            this.collectionSize = data.CollectionSize;
        })
        this.currentPage = 1;
    }

    open(content){
        this.modalService.open(content);
    }

    getNewsPage() {
        this.newsService.getNewsPage(this.currentPage).subscribe(data => {
            this.newsPage = data;
            this.collectionSize = data.CollectionSize;
        })
    }

    AddComment(newsId: number, commentText: string){
        this.commentService.postComment(newsId, commentText, "TestAuthor").subscribe(data => {
            this.router.navigate(['/home']);
        })
    }

}
