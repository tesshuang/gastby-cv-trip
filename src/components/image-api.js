import React from 'react'
import PropTypes from "prop-types"
import Img from 'gatsby-image'

const ImageAPI = ({ imageInfo }) => {
  console.log(imageInfo);
  const image = imageInfo.image
  console.log(imageInfo.alt);
  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={imageInfo.alt} />
    )
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={imageInfo.alt} />

  return null
}

ImageAPI.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  })
}

export default ImageAPI