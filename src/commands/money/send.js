const { MessageEmbed } = require('discord.js') //Developed By CryonicX
module.exports = {
    name: 'send',
    aliases: ['donate'],
    cooldown: 1000 * 10,
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.member;
        if (!user) return message.reply('**Lütfen Birisini Etiketle!**');
        const coinsToDonate = args[1];
        if (!coinsToDonate) return message.reply('**Lütfen Gönderilecek Miktarı Girin!**');
        if (isNaN(coinsToDonate)) return message.reply('Lütfen Sayı Giriniz.').then(cryonicx2 => cryonicx2.delete({ timeout: 15000 }));
        const donetion = parseInt(coinsToDonate);
        if (await client.bal(message.author.id) < donetion) return message.reply('**Bu Kadar Paranız Yok**').then(cryonicx2 => cryonicx2.delete({ timeout: 15000 }));
        await client.rmv(message.author.id, donetion);
        await client.add(user.id, donetion);
        message.channel.send(`${message.author} ${user} üyesine ${donetion} coin gönderdi!!`)
    }
}