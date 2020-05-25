import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Post } from "src/app/interfaces/post.interface";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  public postList: Post[];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getPosts().subscribe(postList => {
      this.postList = postList.posts;
    });
  }
}
