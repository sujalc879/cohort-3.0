import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      
      <Link to={"/"}>home     </Link>
      <Link to={"/blog"}>blog     </Link>
      <Link to={"/contact"}>contact     </Link>
    </div>
  )
}
