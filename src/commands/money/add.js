const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ekle', //Developed By CryonicX

    cooldown: 1000 * 10,
    run: async(client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.reply('Bunu kullanmak için yetkin yok!');
        const member = message.mentions.members.first() || message.member;
        client.add(member.id, parseInt(args[0])) || parseInt(args[0]), member.id;
        message.channel.send(`${member} adli kişiye başaryıla **` + parseInt(args[0]) + `** coin eklendi.`)
        message.react('✅');
    }
}