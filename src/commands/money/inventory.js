const { client, Message, MessageEmbed } = require('discord.js'); //Developed By CryonicX
const inventory = require(`../../../models/inventory`);

module.exports = {
    name: "çanta",
    cooldown: 1000 * 10,
    aliases: ['inv'],
    run: async(client, message, args) => {
        inventory.findOne({ Guild: message.guild.id, User: message.author.id }, async(err, data) => {
            if (!data) return message.channel.send('Satın Alım Geçmişin Bulunamadı!').then(cryonicx2 => cryonicx2.delete({ timeout: 15000 }));
            const user = message.mentions.members.first() || message.member;
            const mappadData = Object.keys(data.Inventory).map((key) => {
                cryonicx = new MessageEmbed()
                return `${key}(${data.Inventory[key]})`;
            })
            cryonicx.setColor("#2f3136")
            cryonicx.setAuthor(`${message.author.username}`, user.user.displayAvatarURL({ dynamic: true, size: 512 }))
            cryonicx.setDescription(`${user} Üyesinin Satın Alım Geçmişi!\n\n\`\`\`${mappadData.join("\n")}\`\`\``)
            message.channel.send(cryonicx)
        })
    },
};