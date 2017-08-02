import React from 'react'
import {Link} from 'react-router-dom'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack} from 'victory'

import Header from './Header'
import GraphTitle from './Graph_title'

export default function WeekGraph(props) {
  return (
    <div className='week_graph'>
      <Header/>
      <VictoryChart>
        <VictoryBar  />
      </VictoryChart>
      <GraphTitle />
      <Link to='/Graph'>Home</Link>
    </div>
  )
}
