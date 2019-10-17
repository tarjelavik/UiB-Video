import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./general.module.css"

const ListLink = props => (
  <li className={style.navLink} style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#db3f3d`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, display: `inline-block` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ listStyle: `none`, float: `right`, fontStyle: `` }}>
        <ListLink to="/youtube">Youtube</ListLink>
        <ListLink to="/vimeo">Vimeo</ListLink>
        <ListLink to="/tivoli">Tivoli</ListLink>
        <ListLink to="/mastertape">Mastertape</ListLink>
        <ListLink to="/sanity">Sanity (test)</ListLink>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
