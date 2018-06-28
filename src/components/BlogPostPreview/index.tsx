import "./styles.scss";
import * as React from "react";
import { Frontmatter } from "../../interfaces";
import * as bem from "b_";
import { Link } from "react-router-dom";

const b = bem.with("BlogPostPreview");

interface BlogPostPreviewProps {
  excerpt: string;
  timeToRead: string;
  frontmatter: Frontmatter;
  fields: {
    slug: string;
  };
}

class BlogPostPreview extends React.PureComponent<BlogPostPreviewProps> {
  render() {
    const { excerpt, timeToRead, frontmatter, fields } = this.props;
    return (
      <div className={b()}>
        <h2 className={b("title")}>
          <Link className={"link"} to={fields.slug}>
            {frontmatter.title}
          </Link>
        </h2>
        <div className={b("excerpt")}>{excerpt}</div>
        <div className={b("meta")}>
          {frontmatter.date} {frontmatter.author} {timeToRead}
        </div>
      </div>
    );
  }
}

export default BlogPostPreview;
