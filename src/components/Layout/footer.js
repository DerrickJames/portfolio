import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="footer-text">
          © {new Date().getFullYear()}
          {` `} DerrickJames. All rights reserved.
        </span>
      </footer>
    )
  }
}
export default Footer
