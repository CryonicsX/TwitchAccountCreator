const { Client, Message, MessageEmbed, Collection } = require('discord.js'); //Developed By CryonicX
const items = require('../../../shopItems');
module.exports = {
    name: 'market',
    aliases: ['shop'],
    cooldown: 1000 * 10,
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.member;
        const bal = await client.bal(user.id);
        if (!items.length === 0) return message.reply(`Markete Daha Ürün Gelmemiş!`).then(cryonicx2 => cryonicx2.delete({ timeout: 15000 }));
        const shopList = items.map((value, index) => {
            cryonicx = new MessageEmbed()
            cryonicx.setColor("#2f3136")
            cryonicx.setAuthor(`${message.author.username}`, user.user.displayAvatarURL({ dynamic: true, size: 512 }))
            cryonicx.setFooter(`!al item-ismi`)
            if (bal > value.price) {
                return `#${index+1} ${value.item} --> ${value.price} 💰 ✔️`
            } else {
                return `#${index+1} ${value.item} --> ${value.price} 💰 ✖️`
            }
        });
        cryonicx.setDescription(`${user} Üyesinin Mağazası!.\n\n **Mağazamıza hoşgeldiniz!** Aşağıdan paranızın yettiği öğeyi satın alabilirsiniz!\n\n Toplam Paranız: **${bal}**\n\n Paranızın yettikleri,  \`✔️\`  Paranızın Yetmedikleri,  \`✖️\`  ile belirtilmiştir. \n\n\`\`\`${shopList.join("\n\n")}\`\`\``)
        message.channel.send(cryonicx)

    },
};