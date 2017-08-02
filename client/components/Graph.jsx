import React from 'react'
import {Link} from 'react-router-dom'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack} from 'victory'
import GraphTitle from './Graph_title'


const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
]
export default function Graph(props) {
  return (
    <div className='graph'>
      <Link to='/Graph_list/:id'>
      <VictoryChart>
        <VictoryBar  data={data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings" />
      </VictoryChart>
      </Link>
      <GraphTitle/>
    </div>
  )
}
