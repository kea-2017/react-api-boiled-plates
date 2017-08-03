import React from 'react'
import {Link} from 'react-router-dom'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack,VictoryLine} from 'victory'
import GraphTitle from './Graph_title'



	// Math.round(new Date().getTime()/1000.0)

export default function Graph(props) {
  console.log(props);
  let data = props.data
  return (
    <div className='graph'>
      <Link to='/Graph_list/:id'>
      <VictoryChart>
        <VictoryLine  data={data}
        x="time"
        y="open" />
      </VictoryChart>
      </Link>
      <GraphTitle/>
    </div>
  )
}
