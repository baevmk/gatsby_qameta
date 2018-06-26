import * as React from "react";
import Link from 'gatsby-link'


interface TemplateProps {
    data: any
    post: any
}


const Template : React.SFC<TemplateProps> = ({data, post = data.markdownRemark}) => (

    <div>
        <Link to='/blog'> Go Back</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>Postet by {post.frontmatter.author} on {post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html}} />
    </div>
)
export default Template

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: { eq: $path }}){
            html
            frontmatter{
                path
                title
                author
                date
            }
        }
    }
`