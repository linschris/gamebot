// create Collection<Game> of all the games
import options from './../../config/options.js'
import { InteractionOptionType } from 'discord.js-light'

import BotCommand from '../../types/command/BotCommand.js'
export default new BotCommand({
  name: 'play',
  usage: 'play <game>',
  aliases: ['p'],
  description: 'Starts a new game!',
  category: 'fun',
  permissions: [],
  dmCommand: false,
  args: [{
    name: 'game',
    type: InteractionOptionType.STRING,
    required: true,
    description: 'The game to play',
    
  }],
  run: function(msg, args) {
    // for testing only
    const selection = args.join(' ').toLowerCase()
    const game = msg.client.games.find((game, meta) => meta.id == selection || meta.name.toLowerCase() == selection)
    
    const gameOptions = args.slice(1).join(' ')

    msg.client.gameManager.start(game, msg, gameOptions)
    
  }
})