import React from 'react'
import PropTypes from "prop-types"
import Img from 'gatsby-image'

const ImageAPI = ({ imageInfo }) => {
  console.log(imageInfo);

  return(
    <Img src={imageInfo.image} alt={imageInfo.alt} />
  )
}

ImageAPI.PropTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
}

export default ImageAPI