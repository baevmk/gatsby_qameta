import "./styles.scss";
import * as React from "react";
import { Frontmatter } from "../../interfaces";
import * as bem from "b_";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";

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
    const avatar = frontmatter.author.avatar.childImageSharp.resize.src;

    return (
      <div className={b()}>
        <h2 className={b("title")}>
          <Link className={"link"} to={fields.slug}>
            {frontmatter.title}
          </Link>
        </h2>
        <div className={b("excerpt")}>{excerpt}</div>
        <div className={b("meta")}>
          <div className={b("avatar")}>
            <Avatar src={avatar}/>
          </div>
          <div className={b("author")}>
            <div>{frontmatter.author.id} posted {frontmatter.date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPostPreview;
