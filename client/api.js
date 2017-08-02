import request from 'superagent'

export function guildInfo(guildname, info){
  request
    .get ('https://us.api.battle.net/wow/guild/barthilas/if%20we%20die%20its%20lag?locale=en_US&apikey=pnatr5cub5z7m7ra4f3tx8zx2jcb43pr')
    .end((err, res) => {
      info(res.body)
  })
}

export function memberInfo(guildname, members){
  request
    .get ('https://us.api.battle.net/wow/guild/barthilas/if%20we%20die%20its%20lag?fields=members&locale=en_US&apikey=pnatr5cub5z7m7ra4f3tx8zx2jcb43pr')
    .end((err, res) => {
      members(res.body)

  })
}
