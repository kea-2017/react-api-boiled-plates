import React from 'react'
import request from 'superagent'
import {guildInfo} from '../api.js'

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

  componentDidMount() {
    guildInfo('zzz', (info) => {
      this.setState(
        {name: info.name,
        level: info.level,
        realm: info.realm,
        battlegroup: info.battlegroup}
      )
      console.log(info);
    })
  }
  render() {
    return (
      <div>
        <h1>WowZa development has begun!</h1>
          <div>Guild-Name: {this.state.name}</div>
          <div>Level: {this.state.level}</div>
          <div>Realm: {this.state.realm}</div>
          <div>Battle-Group: {this.state.battlegroup}</div>
      </div>
    )
  }
}

export default App
