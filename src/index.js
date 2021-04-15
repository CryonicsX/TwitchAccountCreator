//Developed By CryonicX
const { Collection, Client, Discord } = require('discord.js'); //Developed By CryonicX
const client = new Client({ ws: { properties: { $browser: "Discord iOS" } } });
const config = require('./config.json');
const schema = require('./schema')
const mongo = require('mongoose')
mongo.connect(config.mongoDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
const path = require('path')
const fs = require('fs')
module.exports = client;
client.commands = new Collection();
client.prefix = config.prefix;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('src/commands'));
["command"].forEach(handler => {
    require(path.resolve(`src/handlers/${handler}`))(client);
});
client.bal = (id) => new Promise(async ful => {
    const data = await schema.findOne({ id });
    if (!data) return ful(0);
    ful(data.coins);
})
client.add = (id, coins) => {
    schema.findOne({ id }, async(err, data) => {
        if (err) throw err;
        if (data) {
            data.coins += coins;
        } else {
            data = new schema({ id, coins })
        }
        data.save();
    })
}
client.rmv = (id, coins) => {
        schema.findOne({ id }, async(err, data) => {
            if (err) throw err;
            if (data) {
                data.coins -= coins;
            } else {
                data = new schema({ id, coins: -coins })
            }
            data.save();
        })
    }
    //developed by cryonicx
client.login(config.token);