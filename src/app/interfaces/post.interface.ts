import { Author } from "./author.interface";
import { Discussion } from "./discuccion.interface";
import { PostThumbnail } from "./post-thumbnail.interface";
import { Terms } from "./terms.interface";

export interface Post {
  ID: number;
  site_ID: number;
  author: Author;
  date: string;
  modified: string;
  title: string;
  URL: string;
  short_URL: string;
  content: string;
  excerpt: string;
  slug: string;
  guid: string;
  status: string;
  sticky: boolean;
  password: string;
  parent: boolean;
  type: string;
  discussion: Discussion;
  likes_enabled: boolean;
  sharing_enabled: boolean;
  like_count: 185;
  i_like: boolean;
  is_reblogged: boolean;
  is_following: boolean;
  global_ID: string;
  featured_image: string;
  post_thumbnail: PostThumbnail;
  format: string;
  geo: boolean;
  menu_order: number;
  page_template: string;
  publicize_URLs: any[];
  terms: Terms;
}