import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import Graph from './Graph'

export default class GraphList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      graphs: [],
      selectedGraph: null
    }
  }
  render() {
    return (
      <div>
        <tr className='oneGraph'>
          <td><Graph data={this.props.data}/></td>
        </tr>
      </div>

    )
  }
}
