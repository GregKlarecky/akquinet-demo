import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { ApiService } from "../services/api.service";
import { Observable, EMPTY } from "rxjs";
import { catchError } from "rxjs/operators";
import { PostList } from "../interfaces/post-list.interface";

@Injectable({ providedIn: "root" })
export class HomeResolver implements Resolve<any> {
  constructor(private router: Router, private api: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PostList> {
    return this.api.getPosts().pipe(
      catchError(err => {
        this.router.navigate(["/not-found"]);
        return EMPTY;
      })
    );
  }
}
