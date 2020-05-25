import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/interfaces/post.interface";
import { ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { PostExtended } from "src/app/interfaces/post-extended.interface";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"]
})
export class PostDetailsComponent implements OnInit {
  public post: PostExtended;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.post = this.route.snapshot.data.post;
  }
}
