import { Component, OnInit, Input } from "@angular/core";
import { Author } from "src/app/interfaces/author.interface";

@Component({
  selector: "app-author",
  templateUrl: "./author.component.html",
  styleUrls: ["./author.component.scss"]
})
export class AuthorComponent implements OnInit {
  @Input() author: Author;
  @Input() date: string;
  constructor() {}

  ngOnInit() {}
}
