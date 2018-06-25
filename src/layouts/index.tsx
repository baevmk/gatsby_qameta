import "./styles.scss";
import * as React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="My Gatsby TS snippet"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header
          siteTitle="My Gatsby TS snippet"
        />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}

// export default Layout
export default DefaultLayout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
