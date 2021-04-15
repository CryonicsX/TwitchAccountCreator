const { client, Message, MessageEmbed } = require('discord.js');
const inventory = require(`../../../models/inventory`);
const items = require('../../../shopItems');
module.exports = {
    name: 'al', //Developed by CryonicX
    aliases: ['buy'],
    cooldown: 1000 * 10,
    run: async(client, message, args) => {
        if (!args[0]) return message.reply('**Lütfen Almak İstediğin Şeyi Yaz**').then(cryonicx2 => cryonicx2.delete({ timeout: 15000 }));
        const itemToBuy = args[0].toLowerCase();
        const validItem = !!items.find((val) => val.item.toLowerCase() === itemToBuy);
        if (!validItem) return message.reply('**Böyle Bir Eşya Yok**');
        const itemPrice = items.find((val) => val.item.toLowerCase() === itemToBuy)
            .price;
        const userBalance = await client.bal(message.author.id);
        if (userBalance < itemPrice)
            return message.reply(`Bunu almak için**${itemPrice}** Coine İhtiyacın Var.`).then(cryonicx2 => cryonicx2.delete({ timeout: 15000 }));
        const params = {
            Guild: message.guild.id,
            User: message.author.id
        };
        inventory.findOne(params, async(err, data) => {
            if (data) {
                const hasItem = Object.keys(data.Inventory).includes(itemToBuy);
                if (!hasItem) {
                    data.Inventory[itemToBuy] = 1;
                } else {
                    data.Inventory[itemToBuy]++
                }
                console.log(data);
                await inventory.findOneAndUpdate(params, data);
            } else {
                new inventory({
                    Guild: message.guild.id,
                    User: message.author.id,
                    Inventory: {
                        [itemToBuy]: 1,
                    },
                }).save();
            }
            message.reply(`${itemToBuy} Satın Alındı!`);
            message.react('✅');
            client.rmv(message.author.id, itemPrice);
        });
    },
};