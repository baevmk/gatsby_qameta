import "./styles.scss";
import * as React from "react";
import * as bem from "b_";
import Link from "gatsby-link";

const b = bem.with("Header");

interface MenuLink {
  name: string;
  href: string;
}

const links: Array<MenuLink> = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Blog",
    href: "/blog"
  },
  {
    name: "Products",
    href: "/products"
  },
  {
    name: "About",
    href: "/about"
  }
];

const Header: React.SFC<{ siteTitle: string }> = ({ siteTitle }) => (
  <div className={b()}>
    <div className={b("title")}>{siteTitle}</div>
    <div className={b("menu")}>
      {links.map(link => (
        <Link key={link.href} className={b("menu-item")} to={link.href}>{link.name}</Link>
      ))}
    </div>
  </div>
);

export default Header;
