export interface PostAttribute {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent?: number;
  meta: {
    links: {
      self: string;
      help: string;
      site: string;
    };
  };
}
