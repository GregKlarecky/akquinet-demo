import { Post } from "./post.interface";
import { Comment } from "./comment.interface";

export interface PostExtended extends Post {
  comments: Comment[];
}
