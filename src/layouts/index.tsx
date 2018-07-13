import "prismjs/themes/prism-coy.css";
import "./styles.scss";
import * as React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as bem from "b_";

const b = bem.with("App");

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
          title="Qameta software"
          meta={[
            { name: "description", content: "Qameta software site" },
          ]}
        />
        <div className={b("header")}>
          <Header siteTitle="Qameta software" />
        </div>
        <div className={b("content")}>{this.props.children()}</div>
        <div className={b("footer")}>
          <Footer siteCopyrights="Qameta software &copy; 2018" />
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
