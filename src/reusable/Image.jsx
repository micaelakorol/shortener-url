import React from 'react'

const Image = ({src, alt, onClick}) => {
  return (
    <img src={src} alt={alt} onClick={onClick}/>
  )
}

export default Image