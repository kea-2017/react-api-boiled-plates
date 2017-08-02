import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
// import SearchBar from './Search_bar'
import Graph from './Graph'
import GraphTitle from './Graph_title'
import GraphList from './Graph_list'
import WeekGraph from './Week_graph'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/graph' component={Header}/>
          {/* <Route path='/graph' component={SearchBar}/> */}
          <Route exact path='/Graph' component={GraphList}/>
          <Route exact path='/Graph' component={GraphList}/>
          <Route exact path='/Graph' component={GraphList}/>
          <Route exact path='/Graph' component={GraphList}/>
          <Route exact path='/Graph' component={GraphList}/>
          <Route exact path='/Graph' component={GraphList}/>
          <Route path='/Graph_list/:id' component={WeekGraph}/>
        </div>
      </Router>
    </div>
  )
}

export default App
