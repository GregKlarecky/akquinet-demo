import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { api } from "src/environments/environment";
import { Observable } from "rxjs";
import { Post } from "../interfaces/post.interface";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post> {
    return this.http.get<Post>(`${api.url}posts/`);
  }
}
