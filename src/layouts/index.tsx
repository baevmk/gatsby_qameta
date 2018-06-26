import "./styles.scss";
import * as React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as bem from "b_";

const b = bem.with("Site");

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div className={b()}>
        <Helmet
          title="My Gatsby TS snippet"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header
          siteTitle="QAmeta.io"
        />
        <div className={b("child")}>
          {this.props.children()}
        </div>
        <Footer 
          siteCopyrights="QAmeta.io &copy; 2018"
        />
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
