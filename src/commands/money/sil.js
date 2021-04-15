const { MessageEmbed } = require('discord.js') //Developed By CryonicX
module.exports = {
    name: 'sil',
    aliases: ['remov'],
    cooldown: 1000 * 10,
    run: async(client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.reply('Bunu kullanmak için yetkin yok!').then(cryonicx2 => cryonicx2.delete({ timeout: 15000 }));
        const member = message.mentions.members.first() || message.member;
        client.rmv(member.id, parseInt(args[0]));
        message.channel.send(`${member} adli kişiye başaryıla **` + parseInt(args[0]) + `** coin silindi.`)
        message.react('✅');
    }
}