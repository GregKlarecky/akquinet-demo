import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostExtended } from "src/app/interfaces/post-extended.interface";
import { ImageStyle } from "src/app/interfaces/img-style.intereface";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"]
})
export class PostDetailsComponent implements OnInit {
  public post: PostExtended;
  public imageStyle: ImageStyle;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.post = this.route.snapshot.data.post;
    this.imageStyle = {
      background: `url(${this.post.post_thumbnail.URL}) center/cover no-repeat`
    };
  }
}
