import { Post } from "./post.interface";

export interface PostList {
  found: number;
  posts: Post[];
  meta: {
    links: {
      counts: string;
    };
    next_page: string;
    wpcom: boolean;
  };
}
