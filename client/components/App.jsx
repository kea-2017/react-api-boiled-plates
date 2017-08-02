import React from 'react'
import request from 'superagent'

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
    request
      .get ('https://us.api.battle.net/wow/guild/barthilas/if%20we%20die%20its%20lag?locale=en_US&apikey=pnatr5cub5z7m7ra4f3tx8zx2jcb43pr')
      .end((err, res) => {
        this.setState(
          {name: res.body.name,
          level: res.body.level,
          realm: res.body.realm,
          battlegroup: res.body.battlegroup}
        )
        console.log(res.body);
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
