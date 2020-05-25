export const environment = {
  production: false
};

export const api = {
  domain: "https://public-api.wordpress.com",
  site: "en.blog.wordpress.com",
  url: `${this.domain}/rest/v1.1/sites/${this.site}/`
};
