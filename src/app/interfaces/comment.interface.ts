import { Author } from "./author.interface";
import { CommentMeta } from "./comment-meta.interface";

export interface Comment {
  ID: number;
  post: {
    ID: number;
    title: string;
    type: string;
    link: string;
  };
  author: Author;
  date: string;
  URL: string;
  short_URL: string;
  content: string;
  raw_content: string;
  status: string;
  parent: boolean;
  type: string;
  like_count: number;
  i_like: boolean;
  meta: CommentMeta;
  can_moderate: boolean;
}
