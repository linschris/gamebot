import BotCommand from '../../types/command/BotCommand.js'
export default new BotCommand({
    name: 'storedinfo',
    usage: 'storedinfo <@user>',
    aliases: [],
    description: 'Returns a user\'s stored data.',
    category: 'mod',
    permissions: ['MOD'],
    dmCommand: true,
    args: true,
    run: function(msg, args) {
        const collection = msg.client.database.collection('users')
        const userID = args[0].replace(/\D/g, '')
        msg.client.users.fetch(userID, false).then(info => {
            collection.findOne({ userID })
          .then(data => msg.channel.sendEmbed('```json\n' + JSON.stringify(data) + '```'))
          .catch(e => msg.channel.sendEmbed(`There was an error with retrieving the data.`))
        })
    }
})