const { MessageEmbed } = require('discord.js') //Developed By CryonicX
const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: 'coin',
    aliases: ['cash'],
    cooldown: 1000 * 10,
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.member;
        const bal = await client.bal(user.id);
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('./coin.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.font = '30px Verdana';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${bal} `, canvas.width / 1.6, canvas.height / 1.8);
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 27, 27, 200, 200);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'coin.jpg');
        message.channel.send(`> [ **•** **${user.user.username}** ] Kişisinin Ekonomi Durumu:\n`, attachment)
    }
}
