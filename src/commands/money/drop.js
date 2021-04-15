const { MessageEmbed } = require('discord.js') //Developed By CryonicX
module.exports = {
    name: 'drop',
    aliases: ['fırlat'],
    cooldown: 1000 * 10,
    run: async(client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.reply('Bunu kullanmak için yetkin yok!').then(cryonicx2 => cryonicx2.delete({ timeout: 5000 }));
        const channel = message.mentions.channels.first();
        if (!channel) return message.reply('Lütfen Bir Kanal Etiketle').then(cryonicx2 => cryonicx2.delete({ timeout: 5000 }));
        const coinsAmount = args[1];
        if (!coinsAmount) return message.reply('Lütfen Bir Miktrar Belirt!').then(cryonicx2 => cryonicx2.delete({ timeout: 5000 }));
        const filter = (msg) =>
            msg.guild.id === message.guild.id && msg.content === `!yakala`;
        message.react(`<:804874313994993704:830357691301363712>`)
        channel.send(`Senin için bir hediye var \`!yakala\` yazarak parayı alabilirsin!!!`);
        channel.awaitMessages(filter, { max: 1, time: 100000 }).then(async(msg) => {
            const id = msg.first().author.id;
            const coinsToClaim = parseInt(coinsAmount);
            client.add(id, coinsToClaim);
            msg
                .first()
                .reply(":tada: Tebrikler İlk Sen Yazdığın İçin **" + coinsToClaim + "** Coin Kazandın!!!")
        })
    }
}