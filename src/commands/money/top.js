const { Client, Message, MessageEmbed, Collection } = require('discord.js') //Developed By CryonicX
module.exports = {
    name: 'topcoin',
    aliases: ['top'],
    cooldown: 1000 * 10,
    run: async(client, message, args) => {
        const collection = new Collection();
        await Promise.all(
            message.guild.members.cache.map(async(member) => {
                const id = member.id;
                const bal = await client.bal(id);
                //console.log(`${member.user.tag} -> ${bal}`);
                return bal !== 0 ?
                    collection.set(id, {
                        id,
                        bal,
                    })

                : null;
            })
        );
        const data = collection.sort((a, b) => b.bal - a.bal).first(10);
        message.channel.send(
            new MessageEmbed()
            .setColor("#2f3136")
            .setAuthor(`${message.guild.name} Sunucusunun Coin Liderlik Verileri;`, message.guild.iconURL({ dynamic: true, size: 2048 }))
            .setThumbnail(message.guild.iconURL({ dynamic: true, size: 2048 }))
            .setFooter(`Developed by CryonicX`, 'https://cdn.discordapp.com/avatars/788158033641078794/db56be9f52ac65d1c74eee0d20920d6d.webp?size=2048')
            .setDescription(
                data.map((v, i) => {
                    return `\n \`${i+1}.\` ${client.users.cache.get(v.id)} : \`${v.bal}💰\` `

                })
            )
        )
    }
};