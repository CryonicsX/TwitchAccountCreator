const { MessageEmbed, DiscordAPIError } = require('discord.js')
module.exports = {
    name: 'katlakazan',
    //aliases: [''],
    cooldown: 1000 * 10,
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.member;
        if (!args[0]) message.reply('Argument Girmedin');
        if (isNaN(args[0])) return message.reply('Argument sayı olmalı');
        const amountToBet = parseInt(args[0])
        if (await client.bal(message.author.id) < amountToBet) return message.reply(`Bunun İçin Yeterli Paran Yok`).then(cryonicx2 => cryonicx2.delete({ timeout: 15000 }));

        function random() {
            const num = Math.floor(Math.random() * 2);
            return num === 1;
        };
        if (random() === true) {
            const winAmount = amountToBet * 2;
            message.channel.send(`🕛 (10) **saniye sonra sonuç açıklanacaktır!!**`).then(a => {
                setTimeout(() => {
                    a.edit(`${user}\n :tada: Tebrikler **${winAmount}** Coin Kazandın <a:coin:831523765640888361>`)
                }, 10000)
            })
            client.add(message.author.id, winAmount)
        } else {
            message.channel.send(`🕛 (10) **saniye sonra sonuç açıklanacaktır!!**`).then(a => {
                setTimeout(() => {
                    a.edit(`${user}\n :pensive: Üzgünüm **${amountToBet}** Coin Kaybettin Bir Daha ki Sefere. <a:coin:831523765640888361>`)
                }, 10000)
            });
            client.rmv(message.author.id, amountToBet);
        }
    },
};
