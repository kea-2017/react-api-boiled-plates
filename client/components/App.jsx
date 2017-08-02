import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import request from 'superagent'

import {guildInfo} from '../api.js'
import {memberInfo} from '../api.js'
import Header from './Header.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      realm: null,
      battlegroup: null,
      level: null
    }
  }

  componentWillMount() {
    guildInfo('zzz', (info) => {
      this.setState(
        {name: info.name,
        level: info.level,
        realm: info.realm,
        battlegroup: info.battlegroup}
      )
      console.log(info);
    })
    memberInfo('zzz', (members) => {
      console.log(members);
    })
  }
  render() {
    return (
      <div>
        <Router>
          <div>
          <Route path='/' component={Header} />
            <div>Guild-Name: {this.state.name}</div>
            <div>Level: {this.state.level}</div>
            <div>Realm: {this.state.realm}</div>
            <div>Battle-Group: {this.state.battlegroup}</div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
