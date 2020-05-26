import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/interfaces/post.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  public postList: Post[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.postList = this.route.snapshot.data.postList.posts;
  }
}
