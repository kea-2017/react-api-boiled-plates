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
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    this.getCoinData('BTC')
  }
  getCoinData(coinName) {
    request.get(`http://localhost:3000/v1/coinPrice/${coinName}`).end((err, res) => {
      if (err)
        return
      let data = this.state.data
      data[coinName] = res.body
      this.setState({data})
    })
  }
  render() {
    // console.log(this.state);
    let data = this.state.data
    console.log({data});
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/Graph' component={Header}/>
            <Route path='/Graph' component={(props) => <SearchBar submit={this.getCoinData.bind(this)}/>}/>
            <span></span>
            <Route exact path='/Graph' render={() => <GraphList data={data}/>}/>
            <Route path='/Graph_list' component={() => <Graph data={data}/>}/>
          </div>
        </Router>
      </div>
    )
  }
}
