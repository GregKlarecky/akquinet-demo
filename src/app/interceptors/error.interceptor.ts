import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { url } from "src/environments/environment";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (request.url.includes(url)) {
          this.router.navigate(["/404"]);
        }
        return EMPTY;
      })
    );
  }
}
