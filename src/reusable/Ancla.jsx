import React from 'react'

const Ancla = ({href,children, className}) => {
  return (
   <a href={href} className={className}>{children}</a>
  )
}

export default Ancla