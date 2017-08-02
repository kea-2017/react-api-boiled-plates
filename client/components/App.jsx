import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import Fetch from 'node-fetch'
import request from 'superagent'

import Home from './Home'
import Header from './Header'
import SearchBar from './Search_bar'
import Graph from './Graph'
import GraphTitle from './Graph_title'
import GraphList from './Graph_list'
import WeekGraph from './Week_graph'

export default class App extends React.Component {
  componentDidMount() {
    request
    .get('https://min-api.cryptocompare.com/data/')
    .end((err, res) => {
      console.log(res.body)
    })
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/graph' component={Header}/>
            <Route path='/graph' component={SearchBar}/>
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
}
