import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function(props) {
  return (
    <Link to="/Graph">
      <div>
        {<img src='https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'/>}
        <h6>Styling by the64thcommodore.com</h6>
      </div>
    </Link>
  )
}
