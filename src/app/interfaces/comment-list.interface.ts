import { Comment } from "./comment.interface";

export interface CommentList {
  comments: Comment[];
  found: number;
  site_ID: number;
}
