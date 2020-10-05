import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
            title
          }
        }
      }
    `)

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About me</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;