import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/interfaces/post.interface";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  public imageStyle: any;
  constructor() {}

  ngOnInit() {
    this.imageStyle = {
      background: `url(${this.post.post_thumbnail.URL}) center/cover no-repeat`
    };
  }
}
