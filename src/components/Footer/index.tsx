import "./styles.scss";
import * as React from "react";
import * as bem from "b_";

const b = bem.with("Footer");

const Footer: React.SFC<{ siteCopyrights: string }> = ({ siteCopyrights }) => (
  <div className={b()}>
    <div className={b("copyrights")}>{siteCopyrights}</div>       
  </div>
);

export default Footer;
