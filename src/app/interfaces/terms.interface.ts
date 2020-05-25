import { Category } from "./category.interface";
import { PostTag } from "./post-tag.interface";

export interface Terms {
  category: Category;
  post_tag: PostTag;
  post_format: object;
  mentions: object;
}
