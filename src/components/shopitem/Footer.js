import React from 'react'
import {Link} from '../router'

export const Footer = () => {
  return (
    <div className="Footer">
      <Link to='/'>All</Link>
      <Link to='/'>To Buy</Link>
      <Link to='/'>Bought</Link>
    </div>
  )
}
