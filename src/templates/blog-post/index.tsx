import "./styles.scss";
import * as React from "react";
import * as bem from "b_";

const b = bem.with("TemplateBlogPost");

interface TemplateBlogPostProps {
  slug: string;
  data: any;
}

class TemplateBlogPost extends React.PureComponent<TemplateBlogPostProps> {
  render() {
    const { data } = this.props;
    return (
      <div className={b()}>
        <h1 className={b("title")}>
          {data.markdownRemark.frontmatter.title}
        </h1>
        <div
          className={b("content")}
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }}
        />
      </div>
    );
  }
}

export default TemplateBlogPost;

export const postQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        author
        date
      }
      fields {
        slug
      }
    }
  }
`;
