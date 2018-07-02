export interface Author {
  id: string;
  bio: string;
  twitter: string;

  avatar: {
    childImageSharp: {
      resize: {
        src: string;
      }
    }
  }
}

export interface Frontmatter {
  date: string;
  title: string;
  author: Author;
}
