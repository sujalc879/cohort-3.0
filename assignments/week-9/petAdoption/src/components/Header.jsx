
import React from 'react'

const Header = ({message, color, opacity}) => {
  
  return (
    <div
    style={{
      backgroundColor : `${color}`,
      opacity : `${opacity}`,
      height : 50,
      width : "100vw",
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
    }}
    >{message}</div>
  )
}

export default Header
