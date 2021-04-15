const { MessageEmbed } = require('discord.js') //Developed By CryonicX
const { prefix } = require('../..')
module.exports = {
    name: 'help',
    cooldown: 1000 * 10,
    run: async(client, message, args) => {
        cryonicx = new MessageEmbed()
        cryonicx.setColor("#2f3136")
        help = `---ÜYE KOMUTLARI---\n\n${prefix}coin === Toplam Coin Miktarınız Gösterir.\n\n${prefix}work === 2 Sattlik İşinizi Gösterir.\n\n${prefix}günlük === Size Günlük Ödülünüzü Verir.\n\n${prefix}katlakazan === Para Katlama Oyunudur.\n\n${prefix}topcoin === Coin Sıralamasını Gösterir.\n\n${prefix}market === Marketi Gösterir.\n\n${prefix}al Marketten Ürün Satın Alırsınız.\n\n${prefix}çanta === Aldığınız Ürünleri Listeler.\n\n${prefix}send === Etiketlediğiniz üyeye para gönderir.\n\n\n---YETKİLİ KOMUTLARI---\n\n${prefix}ekle === Etiketlediğiniz kullanıcıya para ekler.\n\n${prefix}sil === Etiketlediğiniz üyeden para siler.\n\n${prefix}drop === Etiketlediğiniz kanala ödül gönderir üyelerden ilk yazan parayı alır.\n\n\n----------------Developed by CryonicX----------------`
        cryonicx.setDescription(`\`\`\`${help}\`\`\``)
        message.channel.send(cryonicx)
    }
}