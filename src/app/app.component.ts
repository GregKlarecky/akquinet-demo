import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { fade } from "./animations/fade.animation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fade]
})
export class AppComponent implements OnInit {
  public spinner: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.handleSpinner();
  }

  private handleSpinner() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.spinner = true;
      } else if (event instanceof NavigationEnd) {
        this.spinner = false;
      }
    });
  }
}
