import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/interfaces/post.interface";
import { ImageStyle } from "src/app/interfaces/img-style.intereface";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  public imageStyle: ImageStyle;
  constructor() {}

  ngOnInit() {
    this.imageStyle = {
      background: `#ccc url(${this.post.post_thumbnail.URL}) center/cover no-repeat`
    };
  }
}
