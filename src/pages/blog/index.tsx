import "./styles.scss";
import * as React from "react";
import * as bem from "b_";
import BlogPostPreview from "../../components/BlogPostPreview";

const b = bem.with("BlogPage");

class BlogPage extends React.PureComponent<{ data: any }> {
  render() {
    const { data } = this.props;
    return (
      <div className={b()}>
        <h1 className={b("title")}>The Qameta blog</h1>
        <ul className={b("posts")} />

        {data.allMarkdownRemark.edges.map((post: any) => (
          <BlogPostPreview
            key={post.node.id}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            frontmatter={post.node.frontmatter}
            fields={post.node.fields}
          />
        ))}
      </div>
    );
  }
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            date
            author {
              id
              bio
              twitter
              avatar {
                childImageSharp {
                  resize(width: 32, height: 32, quality: 75) {
                    src
                  }
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogPage;
