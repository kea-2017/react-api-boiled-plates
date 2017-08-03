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
      data: []
    }
  }
  componentDidMount() {
    request.get('http://localhost:3000/v1/coinPrice').end((err, res) => {
      console.log(err, res.body);
      this.setState({data: res.body})
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
            <Route path='/graph' component={Header}/>
            <Route path='/graph' component={SearchBar}/>
            <span>" "</span>
            <row>
              <Route exact path='/Graph' render={() => <GraphList data={data} />}/>
              <Route exact path='/Graph' render={() => <GraphList data={data} />}/>
              <Route exact path='/Graph' render={() => <GraphList data={data} />}/>

            </row>
            <row>
              <Route exact path='/Graph' render={() => <GraphList data={data} />}/>
              <Route exact path='/Graph' render={() => <GraphList data={data} />}/>
              <Route exact path='/Graph' render={() => <GraphList data={data} />}/>
              <Route path='/Graph_list' component={() => <Graph data={data}/>}/>
            </row>
          </div>
        </Router>
      </div>
    )
  }
}
