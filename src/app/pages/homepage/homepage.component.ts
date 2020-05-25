import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getPosts().subscribe(console.log);
  }
}
