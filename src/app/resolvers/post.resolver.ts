import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { ApiService } from "../services/api.service";
import { Observable, EMPTY } from "rxjs";
import { Post } from "../interfaces/post.interface";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PostResolver implements Resolve<any> {
  constructor(private router: Router, private api: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> {
    return this.api.getPostBySlug(route.paramMap.get("slug")).pipe(
      catchError(err => {
        this.router.navigate(["/not-found"]);
        return EMPTY;
      })
    );
  }
}
