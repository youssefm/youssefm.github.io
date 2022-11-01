export interface PostFrontmatter {
  title: string;
  publishedOn: string;
}

export interface Post {
  url: string;
  frontmatter: PostFrontmatter;
}
