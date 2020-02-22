import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
      }}>
        <li style={{
          margin: '1rem'
        }}>
          <Link to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              }}>
              Home
            </Link>
        </li>
        <li style={{
          margin: '1rem'
        }}>
          <Link to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
            About
          </Link>
        </li>
        <li style={{
          margin: '1rem'
        }}>
          <Link to="/all-trips"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
            Trips
          </Link>
        </li>
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
