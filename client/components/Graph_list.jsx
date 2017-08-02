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
    // this.selectedGraph = this.selectedGraph.bind(this.props.graphs)
  }
  render() {
    return (
      <div>
        <ul className='oneGraph col-sm-4'>
          <Graph/>
        </ul>
      </div>
    )
  }
}
