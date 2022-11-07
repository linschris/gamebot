export const eventName = 'interactionCreate'

export const handler = async (interaction, client) => {
    try {
        switch(interaction.type) {
            // Slash command
            case 'APPLICATION_COMMAND': {
                await client.commandHandler.handleInteraction(interaction)
                break
            }
            // Do nothing for other interaction types
            default:
                break
        }
    } catch (error) {
        client.emit('error', error)
    }
}