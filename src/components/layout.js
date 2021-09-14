import * as React from 'react'
import { Link } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'

import Container from 'react-bootstrap/Container';
//import Body from 'react-bootstrap/Body';





const Layout = ({ pageTitle, children }) => {

  const headerClass = 'd-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm';
  const classesOne = 'p-2 text-dark';
  const navClassNames ='navLinks my-2 my-md-0 me-md-3';

  return (
    <Container>
      <title>{pageTitle}</title>
     {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav> */}
      <header className={headerClass}>

        <p class="h5 my-0 me-md-auto fw-normal">
        <Link className={classesOne} to="/">
            <StaticImage src="../images/logo.svg" alt="Language Shop Logo" height="70" width="75" />
        </Link>
        </p>
        <nav className={navClassNames}>
          <Link className={classesOne} to="/courses">Courses</Link>
          <Link className={classesOne} to="/prices">Prices</Link>
          <Link className={classesOne} to="/about">About</Link>
          <Link className={classesOne} to="/contact">Contact</Link>
        </nav>

      </header>

      <main className="container">
        <h1 className="display-4">{pageTitle}</h1>
        {children}
      </main>
    </Container>
  )
}

export default Layout
