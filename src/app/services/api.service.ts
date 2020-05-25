import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PostList } from "../interfaces/post-list.interface";
import { url } from "src/environments/environment";
import { Post } from "../interfaces/post.interface";

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
}
