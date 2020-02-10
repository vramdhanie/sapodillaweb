import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Banner = ({ className, img }) => {
  return (
    <BackgroundImage fluid={img} className={className}>
      <div>
        <div>
          <h1>This is True technologies</h1>
        </div>
        <p>Innovative, software solutions</p>
      </div>
    </BackgroundImage>
  )
}

export default styled(Banner)`
  text-align: center;
  letter-spacing: var(--mainSpacing);
  color: var(--primaryText);
  text-shadow: 0 0 2px black;
  min-height: calc(100vh - 62px);
  background: linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7));
  background-position: center;
  background-size: cover;
  opacity: 1 !important;

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 6px;
  }

  p {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 484px) {
    h1 {
      font-size: 3.3rem;
    }
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
    }
    p {
      width: 70%;
    }
  }
`
