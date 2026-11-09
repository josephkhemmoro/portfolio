import { NavLink, Link } from "react-router-dom";

const links = [
  { label: "Projects", to: "/projects" },
  { label: "Articles", to: "/articles" },
  { label: "About", to: "/about" },
];

export default function Navigation() {
  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Link className="site-wordmark" to="/" aria-label="Joseph Khemmoro, home">
          <span aria-hidden="true">JK</span>
          <span className="site-wordmark-name">Joseph Khemmoro</span>
        </Link>
        <nav aria-label="Main navigation">
          {links.map(({ label, to }) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
