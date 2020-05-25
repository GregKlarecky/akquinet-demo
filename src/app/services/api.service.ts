import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../interfaces/post.interface";
import { PostList } from "../interfaces/post-list.interface";
import { url } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<PostList> {
    return this.http.get<PostList>(`${url}posts/`);
  }
}
