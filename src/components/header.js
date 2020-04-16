import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="p-4 bg-dark mb-4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>
            <Link to="/" className="text-danger text-uppercase h2">
              {siteTitle}
            </Link>
          </h1>
        </div>
        </div>
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
