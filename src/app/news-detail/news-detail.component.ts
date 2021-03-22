import { AuthService } from './../auth.service';
import { NewsService } from './../news.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit, OnDestroy {

  news;
  newsId;
  newsComments;
  leaveCommentName: string;
  leaveCommentMessage: string;
  authenticated = false;
  loggedInSub: Subscription;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsId = parseInt(this.route.snapshot.params['newsId'])
    this.news = this.newsService.getNewsById(this.newsId)
    this.newsComments = this.newsService.getCommentsByNewsId(this.newsId)

    this.loggedInSub = AuthService.loggedIn.subscribe( loggedIn => {
      this.authenticated = loggedIn
    })
  }

  addComment(){
    let comment = { id: this.newsService.setCommentsId() ,newsId: this.newsId, userImage: 'https://yt3.ggpht.com/a/AATXAJxt32IfzpLqTt61aeYaqfUIAjT6ykRpAi3OqA2E=s900-c-k-c0xffffffff-no-rj-mo', user: this.leaveCommentName, comment: this.leaveCommentMessage }
    this.newsService.createComment(comment)
    this.newsComments = this.newsService.getCommentsByNewsId(this.newsId)
    this.clearLeaveCommentPlace()
  }

  clearLeaveCommentPlace(){
    this.leaveCommentName = undefined;
    this.leaveCommentMessage = undefined;
  }

  deleteComment(commentId){
    this.newsService.deleteComment(commentId)
    this.newsComments = this.newsService.getCommentsByNewsId(this.newsId)
  }

  ngOnDestroy(): void {
    if ( this.loggedInSub ) this.loggedInSub.unsubscribe()
  }
}
