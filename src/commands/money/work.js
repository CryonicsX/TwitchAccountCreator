const { MessageEmbed } = require('discord.js') //Developed By CryonicX
module.exports = {
    name: 'work',
    aliases: ['iş'],
    cooldown: 1000 * 60 * 60 * 2,
    run: async(client, message, args) => {
        const jobs = ['Yazılımcı', 'İnşaatçı', 'Ponrstar', 'Otobüs Şoförü', 'Şef', 'Mühendis', 'Doktor', 'Pezevenk', 'Orsopu', 'Genel Ev Müdür', 'Patron', 'Hırsız', 'Kundakçi', 'Mafya', 'Profesör', 'Twitch Yayıncısı', 'Yazılımcı', 'Youtuber', 'E Sporcu', 'Botçu xd', 'altyapı çalıcı', 'Emekli']
        const user = message.mentions.members.first() || message.member;
        const jobIndex = Math.floor(Math.random() * jobs.length)
        const coins = Math.floor(Math.random() * 200) + 1;
        message.channel.send(`${user} Yeni işin **${jobs[jobIndex]}** ve **${coins}** coine'e sahipsin`)
        client.add(message.author.id, coins);
    }
}