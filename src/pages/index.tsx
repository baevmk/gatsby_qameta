import "./styles.scss";
import * as React from "react";
import * as bem from "b_";

const b = bem.with("HomePage");

class HomePage extends React.PureComponent<{ data: any }> {
  render() {
    return (
      <div className={b()}>
        <div className={b("main")}>
          <div className={b("title-wrapper")}>
            <h1 className={b("title")}>Qameta</h1>
            <h2 className={b("subtitle")}>Software Development and Quality</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
