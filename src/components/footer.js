import React from "react"
import styled from "styled-components"

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default styled(Footer)``
