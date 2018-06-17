import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { 
      
  }

  readonly serverUrl = "http://localhost:49831";

  postComment(newsId: number, commentText: string, author: string){
      var body = {
          Text:commentText,
          Author:author
      }
      return this.http.post(this.serverUrl + "/api/comments/" + newsId, body);
  }
}
