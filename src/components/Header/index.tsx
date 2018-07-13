import "./styles.scss";
import * as React from "react";
import * as bem from "b_";
import Link from "gatsby-link";

const b = bem.with("Header");

interface MenuLink {
  name: string;
  href: string;
  exact: boolean;
}

const links: Array<MenuLink> = [
  {
    name: "Home",
    href: "/",
    exact: true,
  },
  {
    name: "Blog",
    href: "/blog",
    exact: false,
  },
  {
    name: "Products",
    href: "/products",
    exact: false,
  },
  {
    name: "Team",
    href: "/team",
    exact: false,
  },
  {
    name: "About",
    href: "/about",
    exact: false,
  }
];

const Header: React.SFC<{ siteTitle: string }> = ({ siteTitle }) => (
  <div className={b()}>
    <div className={b("logo")}>
      <Link to="/" />
    </div>
    <div className={b("menu")}>
      {links.map(link => (
        <Link
          key={link.href}
          className={b("menu-item")}
          activeClassName={b("menu-item", { active: true })}
          to={link.href}
          exact={link.exact}
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

export default Header;
