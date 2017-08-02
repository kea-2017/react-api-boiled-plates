import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function(props) {
  return (
    <Link to="/Graph">
      <div>
        <h2>Home Logo</h2>
        <h6>Styling by the64thcommodore.com</h6>
      </div>
    </Link>
  )
}
