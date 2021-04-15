const { MessageEmbed } = require('discord.js') //Developed By CryonicX
module.exports = {
    name: 'günlük',
    aliases: ['daily'],
    cooldown: 1000 * 60 * 60 * 24,
    run: async(client, message, args) => {
        const coins = Math.floor(Math.random() * 2000) + 1;
        message.channel.send(`**${coins}** Kazandın Yarında Gelip Paranı Alabilrsin!`)
        client.add(message.author.id, coins);
    }
}