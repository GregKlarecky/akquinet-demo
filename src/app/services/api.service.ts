import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PostList } from "../interfaces/post-list.interface";
import { url } from "src/environments/environment";
import { Post } from "../interfaces/post.interface";
import { mergeMap, map } from "rxjs/operators";
import { CommentList } from "../interfaces/comment-list.interface";
import { PostExtended } from "../interfaces/post-extended.interface";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<PostList> {
    return this.http.get<PostList>(`${url}posts/`);
  }

  public getPostBySlug(slug: string): Observable<Post> {
    return this.http.get<Post>(`${url}posts/slug:${slug}`);
  }

  public getCommentsByPostId(id: number): Observable<CommentList> {
    return this.http.get<CommentList>(`${url}posts/${id}/replies`);
  }

  public getPostWithDetails(slug: string): Observable<PostExtended> {
    return this.getPostBySlug(slug).pipe(
      mergeMap(post =>
        this.getCommentsByPostId(post.ID).pipe(
          map(reply => ({ ...post, comments: reply.comments }))
        )
      )
    );
  }
}
