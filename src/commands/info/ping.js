const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ping',
    category: 'info',
    run: async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
    }
}