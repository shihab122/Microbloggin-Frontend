import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Post} from '../model/post.model';
import {Comment} from '../model/comment.model';
import {Vote} from '../model/vote.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public _base_url = 'http://localhost:8080/post';
  public _find_all = this._base_url + '/list';
  public _find_by_id = this._base_url + '/view';
  public _create = this._base_url + '/create';
  public _add_vote = this._base_url + '/add-vote';
  public _add_comment = this._base_url + '/add-comment';

  private _httpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });

  constructor(
    private apiService: ApiService
  ) { }

  findAll(): Observable<any> {
    return this.apiService.get(this._find_all, this._httpHeaders);
  }

  findById(id: string): Observable<any> {
    return this.apiService.get(this._find_by_id + '/' + id, this._httpHeaders);
  }

  create(post: Post): Observable<any> {
    return this.apiService.post(this._create, post, this._httpHeaders);
  }

  addVote(vote: Vote, postId: string, accessToken: string): Observable<any> {
    return this.apiService.post(this._add_vote + '/' + postId + '/' + accessToken, vote, this._httpHeaders);
  }

  addComment(comment: Comment, postId: string, accessToken: string): Observable<any> {
    return this.apiService.post(this._add_comment + '/' + postId + '/' + accessToken, comment, this._httpHeaders);
  }


}
